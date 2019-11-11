const router = require('express').Router();

const Users = require('./userModel.js');
const requiresAuth = require('../auth/requires-auth-middleware')

router.get('/', requiresAuth, (req, res) => {
  console.log('hello')
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;