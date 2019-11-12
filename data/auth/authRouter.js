const router = require('express').Router();
const bcrypt = require('bcrypt')

const Users = require('../users/userModel.js');

router.post('/register', (req, res) => {
  let userInfo = req.body;
  console.log(userInfo)

  const hash = bcrypt.hashSync(userInfo.password, 12)
  userInfo.password = hash

  Users.add(userInfo)
    .then(saved => {
      req.session.username = saved.username
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
