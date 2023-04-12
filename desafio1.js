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

    if (title == undefined || description == undefined || price == undefined || thumbnail == undefined || code == undefined || stock == undefined) {
      console.log('Debe completar todos los campos');
    } else {
      const productFound = this.products.some((item) => item.code == code);
      if (productFound) {
        console.log('El producto ya existe');
      } else {
        this.products.push(product);
      }
    }
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const productFound = this.products.find((item) => item.id == id);
    if (productFound) {
      console.log('El producto encontrado es ', productFound);
    } else {
      console.log('Not found');
    }
  }
}

const product1 = new ProductManager();
/* product1.getProducts(); */

product1.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
product1.addProduct('producto prueba 2', 'Este es un producto prueba', 200, 'Sin imagen', 'abc124', 25);
product1.addProduct('producto prueba 3', 'Este es un producto prueba', 200, 'Sin imagen', 'abc125', 25);
product1.getProducts();
product1.getProductById(1);
