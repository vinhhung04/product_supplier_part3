const User = require('../models/User');

exports.getRegister = (req, res) => res.render('auth/register');
exports.getLogin = (req, res) => res.render('auth/login');
exports.getForgot = (req, res) => res.render('auth/forgot');

exports.postRegister = async (req, res) => {
  const { username, password, email, phone } = req.body;
  try {
    await User.create({ username, password, email, phone });
    res.redirect('/auth/login');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).send("Sai tài khoản hoặc mật khẩu");
  }
  req.session.user = { id: user._id, username: user.username };
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
};
