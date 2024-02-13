const db = require('../models/models.js')

profileController = {};

profileController.createAboutInfo = (req, res, next) => {
  const { fav_lang, looking_for, role, user_id} = req.body.info
  db.query('INSERT INTO about_you (fav_lang, looking_for, role) VALUES ($1, $2, $3) RETURNING id', [fav_lang, looking_for, role])
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

profileController.updateAboutInfo = (req, res, next) => {
  const user_id = req.body;
  db.query(`DELETE FROM about_you WHERE id=${id}`)
    .then(() => {
      console.log('Deleted about you info')
    })
}

module.exports = profileController;