const db = require('../models/models.js')

profileController = {};

profileController.createAboutInfo = (req, res, next) => {
  const { name, fav_lang, looking_for, role, user_id} = req.body;
  db.query('INSERT INTO about_you (name, fav_lang, looking_for, role) VALUES ($1, $2, $3, $4) RETURNING id', [name, fav_lang, looking_for, role])
    .then((id) => {
      db.query(`UPDATE user_info SET about_id=${id.rows[0].id} WHERE user_id=${user_id}`)
        .then(() => {
          console.log('Inserted about you info');
          next();
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}

profileController.getAboutInfo = (req, res, next) => {
  db.query('SELECT * FROM about_you WHERE id=$1', [req.body.aboutYouIid])
    .then(data => {
      res.locals.about_you = data.rows[0]
      next()
    })
    .catch(err => next(err))
}

profileController.updateAboutInfo = (req, res, next) => {
  const { name, fav_lang, looking_for, role, about_id } = req.body;
  db.query('UPDATE about_you SET name=$1 fav_lang=$2, looking_for=$3, role=$4 WHERE id=$5', [name, fav_lang, looking_for, role, about_id])
    .then(() => {
      console.log('Updated about you info')
      next()
    })
}

module.exports = profileController;