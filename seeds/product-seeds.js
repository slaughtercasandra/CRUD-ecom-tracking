const { Product } = require('../models');

const productData = [
  {
    product_name: 'Gucci Purse',
  
    category_id: 1,
  },
  {
    product_name: 'Prada Wallet',
  
    category_id: 5,
  },
  {
    product_name: 'Versace Shoes',
    
    category_id: 4,
  },
  {
    product_name: 'Dolce & Gabbana Swimsuit',
   
    category_id: 3,
  },
  {
    product_name: 'Burberry Skarf',
  
    category_id: 2,
  },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;