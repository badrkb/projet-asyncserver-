var should, user;

should = require('should');

user = require('../lib/user.js');

describe('my first test list', function() {
  return it('should get a user w/ right parameters', function(done) {
    return user.get("badr", function(res) {
      console.log(res);
      res.should.equal("Naima");
      return done();
    });
  });
});
