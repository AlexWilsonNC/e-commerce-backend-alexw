const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
// Product.belongToMany(Tag, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'product_belongingToTag'
// });

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
  });

// Tags belongToMany Products (through ProductTag)
// Tag.belongToMany(Product, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'tag_belongingToProducts'
// });

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
