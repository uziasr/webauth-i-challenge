const bcrypt = require('bcryptjs')
const Users = require('../users/userModel.js');

// if (req.session && req.session.username){next()}else{res.status(401).json({message: "You cannot pass!"})}

module.exports = (req,res,next) => {
  console.log(req.session)
  if (req.session && req.session.username){
    next()
  }else{
    res.status(401).json({you: 'cannot pass'})
  }
 }

   // let {username, password} = req.headers;
  // if(username && password) {
  //   Users.findBy({username})
  //   .first()
  //   .then(user => {
  //     if(user && bcrypt.compareSync(password, user.password)){
  //       console.log(user);
  //       next();
  //     }else {
  //       res.status(401).json({message: "Invalid Credentials"})
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).json({message: 'Unexpected Error'})
  //   });
  // }else {
  //   res.status(400).json({message: "No credentials provided"})
  // }