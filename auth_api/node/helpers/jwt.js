const Config = require('config');
const jwt = require('jsonwebtoken');

let config = Config;

function createToken(payload){
    return jwt.sign(payload, config.jwt_key);
}

function verifyToken(token){
    try{
        return jwt.verify(token, config.jwt_key);
    }catch (err){
        return false;
    }
}


module.exports = {
    createToken,
    verifyToken
}