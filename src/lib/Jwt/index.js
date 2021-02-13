/**
 * Jwt library wrapper for auth0:jsonwebtoken using nodejs
 */
const fs = require('fs');
const uuid = require('uuid/v4');
const auth0 = require('jsonwebtoken');
const moment = require('moment');
const config = JSON.parse(fs.readFileSync(__dirname + '/../../config/jwt.json'));

/**
 * Default wrapper of the JWT token 
 */
const Jwt = module.exports = {};

//Default object options
const defaultObj = {
  issuer   : config.issuer, 
  algorithm: config.algorithm,
  expiresIn: config.expiresIn,
  notBefore: config.notBefore,
  noTimestamp: config.noTimestamp
};

Jwt.create = function (payload, options) {  
  return new Promise((res, rej) => {
    if(!options) {
      options = payload;
    }

    const privateKey = fs.readFileSync(__dirname + '/' + config.private_key);
    
    if(!options.jwtid) {
      const jwtId = uuid();
      options.jwtid = jwtId;
    }
    
    if(payload.iat) {
      payload.iat = moment(payload.iat).unix();
    }
  
    if(options.expiresIn) {
      options.expiresIn = `${moment(options.expiresIn).unix() - payload.iat}s`;
    }

    options = {...defaultObj, ...options};
    console.log(payload);
    auth0.sign(payload, privateKey, options, (errors, token) => {
      if(errors) {
        return rej(errors);
      }
      return res(token);
    });
  });
};

Jwt.verify = function(jwToken, options) {
  return new Promise((res, rej) => {
    if(!options) {
      options = {};
    }

    const publicKey = fs.readFileSync(__dirname + '/' + config.public_key);
    options = {...defaultObj, ...options};

    auth0.verify(jwToken, publicKey, options, (errors, decoded) => {
      if(errors) {
        return rej({
        status: 401,
        error_type: "jwt_expired",
        message: "the token is expired, repeat the operation"
      });
    }
      return res(decoded);
    });
  });
};