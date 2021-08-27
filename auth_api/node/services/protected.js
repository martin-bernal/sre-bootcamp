const jwt = require('../helpers/jwt');

export const protectFunction = (authorization = '') => {
    const token = authorization.replace(/^Bearer\s/, '');
    if(jwt.verifyToken(token)){
      return "You are under protected data";
    }else{
        return "Invalid access token, please login to get access."
    }
}
