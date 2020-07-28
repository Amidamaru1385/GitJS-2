const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = []; //массив товаров с версткой
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
    ProductsSummary() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        return sum;
    }
}

class ProductItem {
    constructor(product, img = `https://picsum.photos/200/300?random${product.price}`) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button id="${this.id}" class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class Basket {
    constructor() {
    }
    render() {

    }
    addProduct() {
        let buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            if (button.classList.contains("buy-btn")) {
                button.addEventListener("click", () => {
                    console.log(button.id);
                })
            }
        })
    }
    findProduct() {
        this.buttons.forEach((button) => {
            // if(button.id_product == )
        })
    }
    ProductsSummary() {

    }

}

class BasketItem {
    constructor() {

    }
    render() {

    }
}
let test = new Basket();
test.addProduct();