const router = require('express').Router();
const bcrypt = require('bcrypt');

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/userRouter.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req,res)=>{
  // read a password from the body
  // has the password using bcryptjs
  // return it to the user in an object that looks like
  // {password: 'original password' , hash: 'hash password'}
  const credentials = req.body
  const hash = bcrypt.hashSync(credentials.password, 12)
  credentials.password = hash
  res.status(201).json(credentials)

  Users.add(credentials)
  .then(saved=>{
    res.status(201).json(saved)
  })
  .catch(error=>{
    res.status(500).json(error)
  })
})

module.exports = router;