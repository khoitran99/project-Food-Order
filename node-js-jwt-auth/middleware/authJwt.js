const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const { user } = require("../models");
constUser = db.user;

verifyToken = (req,res,next)=>{
    let token = req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({
            message : "No token privided!"
        });
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message:"Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};
// check role is admin
isAdmin = (req,res,next) =>{
    user.findByPk(req.userId).then(user=>{
        user.getRoles().then(roles=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name === "admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message : "Require Admin Role!"
            });
            return;
        });
    });
};
// check role is moderator
isModerator = (req,res,next) =>{
    user.findByPk(req.userId).then(user=>{
        user.getRoles().then(roles=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name === "moderator"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message : "Require Moderator Role!"
            });
        });
    });
};


// check moderator or admin
isModeratorOrAdmin = (req,res,next) =>{
    user.findByPk(req.userId).then(user=>{
        user.getRoles().then(roles=>{
            for(let i=0;i<roles.length;i++){
                if(roles[i].name === "admin"){
                    next();
                    return;
                }
                if(roles[i].name === "moderator"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message : "Require Admin or Moderator Role!"
            });          
        });
    });
};
const authJwt = {
    verifyToken :verifyToken,
    isAdmin : isAdmin,
    isModerator : isModerator,
    isModeratorOrAdmin : isModeratorOrAdmin
};
module.exports = authJwt;

