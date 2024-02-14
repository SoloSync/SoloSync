const db = require('../models/models.js')

userController = {};

userController.createUser = (req, res, next) => {
  const {email, password} = req.body
  console.log(email, password)
  db.query('INSERT INTO user_info (email, password) VALUES ($1, $2)', [email, password])
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
  const { email, password } = req.body.user
  db.query('SELECT user_id FROM user_info WHERE email=$1 AND password=$2', [email, password])
    .then(data => {
      if (data.rows.length > 0) {
        res.locals.verification = true;
      }
      else {
        res.locals.verification = false;
      }
      next()
    })
}

userController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM user_info')
    .then(data => {
      console.log(data.rows);
      next();
    })
    .catch(err => next(err));
};

userController.updateUser = (req, res, next) => {
  const { email, password, name, user_id } = req.body
  db.query('UPDATE user_info SET email=$1, password=$2, name=$3 WHERE user_id=$4', [email, password, name, user_id])
    .then(() => {
      console.log('Updated user')
      next()
    })
}

module.exports = userController;