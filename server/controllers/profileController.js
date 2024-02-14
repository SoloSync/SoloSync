const db = require('../models/models.js')

profileController = {};

profileController.createAboutInfo = (req, res, next) => {
  const { name, favLang, lookingFor, role, userId} = req.body;
  db.query('INSERT INTO about_you (name, favLang, lookingFor, role) VALUES ($1, $2, $3, $4) RETURNING id', [name, favLang, lookingFor, role])
    .then((id) => {
      db.query(`UPDATE user_info SET aboutId=${id.rows[0].id} WHERE userId=${userId}`)
        .then(() => {
          console.log('Inserted about you info');
          next();
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}

profileController.getAboutInfo = (req, res, next) => {
  console.log(req.body)
  db.query('SELECT * FROM about_you WHERE id=$1', [req.body.aboutYouId])
    .then(data => {
      res.locals.about_you = data.rows[0]
      next()
    })
    .catch(err => next(err))
}

profileController.updateAboutInfo = (req, res, next) => {
  const { name, favLang, lookingFor, role, aboutId } = req.body;
  db.query('UPDATE about_you SET name=$1 favLang=$2, lookingFor=$3, role=$4 WHERE id=$5', [name, favLang, lookingFor, role, aboutId])
    .then(() => {
      console.log('Updated about you info')
      next()
    })
}

module.exports = profileController;