import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'

const expect = chai.expect;

describe('Login and use token', function () {
  it('Test Login', async function (){
    let token = await loginFunction("admin", "secret");
    expect("You are under protected data").to.be.equal(protectFunction(token));
  });
});

describe('Invalid token', function () {
  it('Test Login', async function (){
    expect("Invalid access token, please login to get access.").to.be.equal(protectFunction('Bearer InvalidTokenExpected'));
  });
});

