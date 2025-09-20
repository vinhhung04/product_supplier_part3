const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware chung
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Session setup
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    maxAge: 1000 * 60 * 60, // 1h
    httpOnly: true,
    secure: false
  }
}));

// 🔹 luôn có biến user cho mọi view
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Import routes
const { ensureAuth } = require('./middlewares/auth');
const supplierRoutes = require('./routes/supplier');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');

// Đăng ký routes
app.use('/suppliers', ensureAuth, supplierRoutes);
app.use('/products', ensureAuth, productRoutes);
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log(err));

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
