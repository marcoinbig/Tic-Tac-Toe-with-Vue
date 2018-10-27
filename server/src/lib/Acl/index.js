const AccessControl = require('accesscontrol');

const roles = require('./roles');

module.exports = new AccessControl(roles);