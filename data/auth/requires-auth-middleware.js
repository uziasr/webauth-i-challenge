const bcrypt = require('bcryptjs')
const Users = require('../users/userModel.js');

module.exports = (req,res,next) => {
  let {username, password} = req.headers;
  if(username && password) {
    Users.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
        console.log(user);
        next();
      }else {
        res.status(401).json({message: "Invalid Credentials"})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Unexpected Error'})
    });
  }else {
    res.status(400).json({message: "No credentials provided"})
  }
 }


// let {username, password} = req.headers;

//     if (username && password){
//     Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         // res.status(200).json({ message: `Welcome ${user.username}!` });
//         next()
//       } else {
//         res.status(401).json({ message: 'Invalid Credentials' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });

//     }else{
//         res.status(401).json({message: 'invalid credentials'})
//     }
// }