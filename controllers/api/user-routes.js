const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// Where to use withAuth helper?

// get ALL users
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ['[password'] },
    });

    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// get single users
router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: 'password' },
      where: { id: req.params.id },
    });

    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    // save and create the properties
    req.session.save(() => {
      // if loggedIn isn't a current property of req.session it will create one with the variable true
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;

      res.status(200).json(dbUserData);
    });
    console.log(req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete user
router.delete('/:id', async (req, res) => {
  try {
    const deleteNote = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(deleteNote);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// Update User
router.put('/:id', async (req, res) => {
  try {
    const updateUser = await User.update(req.body, {
      individualHooks: true,
      where: { id: req.params.id },
    });
    res.json(updateUser);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// Do we need these?
// Login -- This is the one that works
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
