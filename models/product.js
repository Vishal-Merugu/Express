const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if(this.id){
        const existingProductId = products.findIndex(prod => this.id == prod.id);
        const updatedProducts = [...products]
        updatedProducts[existingProductId] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      }else{
        this.id = Math.random()
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb){
    getProductsFromFile(products =>{
      const product = products.find(p => p.id == id);
      cb(product);
    })
  }

  static delete(id){
    let updatedProducts;
    getProductsFromFile(products => {
      updatedProducts = products.filter(p => p.id != id)
      console.log(updatedProducts);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log('error :',err);
      });
    })
  }
}; 
