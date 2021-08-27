const jwt = require('jsonwebtoken');
const jwt_key = process.env.JWT_KEY;

function createToken(payload){
    return jwt.sign(payload, jwt_key);
}

function verifyToken(token){
    try{
        return jwt.verify(token, jwt_key);
    }catch (err){
        return false;
    }
}


module.exports = {
    createToken,
    verifyToken
}