const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

exports.home = async (req, res) => {
  const suppliers = await Supplier.find();
  const query = req.query.q || '';
  const supplierId = req.query.supplier || null;

  let filter = {};
  if (query) filter.name = new RegExp(query, 'i');
  if (supplierId) filter.supplierId = supplierId;

  const products = await Product.find(filter).populate('supplierId');
  res.render('index', { products, suppliers, user: req.session.user });
};
