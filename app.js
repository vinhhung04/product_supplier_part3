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
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    secure: false
  }
}));

// 🔹 Import routes
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

// 🔹 Đăng ký routes
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

// Route mặc định
app.get('/', (req, res) => {
  res.render('index');
});

// Kết nối DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log(err));

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
