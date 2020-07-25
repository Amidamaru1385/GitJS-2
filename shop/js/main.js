class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров с версткой
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
    ProductsSummary(){
        let sum  = 0;
        for(let product of this.goods){
            sum += product.price;
        }
        return sum;
    }
}

class ProductItem{
    constructor(product,img=`https://picsum.photos/200/300?random${product.price}`){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img; 
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
console.log(list.ProductsSummary());

class Basket{
    constructor(){

    }
    render(){
        
    }
    ProductsSummary(){
        
    }
}

class BasketItem{
    constructor(){

    }
    render(){

    }
}