const express = require('express');
const router = express.Router();

// giả lập login
router.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ msg: 'Username required' });

  req.session.user = { username };  // lưu session
  res.json({
    msg: 'Login successful',
    session: req.session
  });
});

// check session
router.get('/me', (req, res) => {
  if (!req.session.user) return res.status(401).json({ msg: 'Not logged in' });
  res.json({ user: req.session.user });
});

// logout
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ msg: 'Logout error' });
    res.clearCookie('connect.sid');
    res.json({ msg: 'Logged out' });
  });
});

module.exports = router;
