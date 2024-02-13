const db = require('../models/models.js')

userController = {};

userController.createUser = (req, res, next) => {
  const {email, password, name} = req.body.data
  console.log(email, password, name)
  db.query('INSERT INTO user_info (email, password, name) VALUES ($1, $2, $3)', [email, password, name])
    .then(() => {
      console.log('executed query')
      next();
    })
    .catch(err => next(err))
};

userController.deleteUser = (req, res, next) => {
  const id = req.body.id
  console.log(id)
  db.query(`DELETE FROM user_info WHERE user_id=${id}`)
  .then(() => {
    console.log('deleted user')
    next();
  })
  .catch(err => next(err))
};

userController.verifyUser = (req, res, next) => {
  
}

userController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM user_info')
    .then(data => {
      console.log(data.rows);
      next();
    })
    .catch(err => next(err));
};

module.exports = userController