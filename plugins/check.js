module.exports = function checkModule() {
  this.add({ role: 'acl', cmd: 'check' }, (msg, done) => done(null, { allow: true }));
};
