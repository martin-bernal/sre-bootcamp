const db = require('../helpers/db');
const hash = require('js-sha512');
const jwt = require('../helpers/jwt');

export const loginFunction = async (username, password) => {
  const userSalt = await db.query('SELECT salt FROM users WHERE username=?', [username]);
  if(userSalt){
    const hashedPass =  hash(password + userSalt[0].salt);
    const userData = await db.query('SELECT username, role FROM users WHERE username=? AND password =?', [username, hashedPass]);
    if(userData){
      return jwt.createToken({username: userData[0].username, role: userData[0].role});
    }
  }
  return 'Invalid credentials.';
}
