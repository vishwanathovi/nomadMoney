var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Users");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
          console.log();
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          user.verifyPassword(password, function(err, isMatched) {
            if (!isMatched) {
              return done(null, false, {
                message:
                  "Wrong Password. Please Check The Password And Try Again!"
              });
            }
            return done(null, user, { message: "Verification Successful" });
          });
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
