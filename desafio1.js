class ProductManager {
  constructor(products) {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const productFound = this.products.some((item) => item.code == code);
    if (productFound) {
      console.log("El producto ya existe");
    } else {
      this.products.push(product);
    }
  }

  getProducts() {
    console.log(this.products);
  }
}
