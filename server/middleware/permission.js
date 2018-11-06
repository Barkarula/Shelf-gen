const {User} = require('./../models/user');


let auth = (req,res,next) =>{
    let token = req.cookies.auth;

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            error:true
        });

        req.token = token;
        req.user = user
        next();
    })

}

let permit = (...allowed) => {
  const isAllowed = role => allowed.indexOf(role) > -1;
  
  // return a middleware
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role))
      next(); // role is allowed, so continue on the next middleware
    else {
      response.status(403).json({message: "Forbidden"}); // user is forbidden
    }
  }
}

module.exports = {permit}