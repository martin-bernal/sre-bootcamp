import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  let response = {
    "data": await loginFunction(username, password),
  };
  res.send(response);
  next();
}
