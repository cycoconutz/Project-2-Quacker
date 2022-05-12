const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');


// resources used for Passport coding
// http://www.passportjs.org/docs/configure/
// https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
  
  async function(req, email, password, done) {
    let user = await User.findOne({
      where: {
        username: username
      }
    });

    let verify;
    if (user != null) {
      verify = await user.checkPassword(password);
    }

    if (!user) {
      return done(null, false, { message: 'Incorrect username!' });
    } else if (!verify) {
      return done(null, false, { message: 'Incorrect password!' });
    }
    return done(null, user)
  }
));


// There are few different wasys to serialize / deserialize
// Specfic example:  http://www.passportjs.org/docs/configure/

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
 done(null, user);
});

module.exports = passport;