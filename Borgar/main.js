class Burger {
    constructor(){
        this.size = "";
        this.topping = "";
        this.spice = "";
        this.price = 0;
        this.callories = 0;
        this.buttonsBurger = document.querySelectorAll("button");

    }
    burgerButtonsHandler(){
        this.buttonsBurger.forEach((button, i) => {
            button.addEventListener("click", () => {
                if (button.dataset.id == "big-burger") {
                    this.size = "большой";
                    this.changePriceAndCallories(100, 40);
                    this.unlockToppings();
                    this.hideSizeChoose();
                }
                if (button.dataset.id == "small-burger") {
                    this.size = "маленький";
                    this.changePriceAndCallories(50, 20);
                    this.unlockToppings();
                    this.hideSizeChoose();
                }
                if (button.dataset.id == "cheese") {
                    this.topping += "сыр ";
                    this.changePriceAndCallories(10, 20);
                    button.setAttribute("disabled", "disabled");
                    this.unlockPrice();
                    this.unlockSpices()
                }
                if (button.dataset.id == "salad") {
                    this.topping += "салат "
                    this.changePriceAndCallories(20, 5);
                    button.setAttribute("disabled", "disabled");
                    this.unlockPrice();
                    this.unlockSpices()
                }
                if (button.dataset.id == "potatoe") {
                    this.topping += "картошка "
                    this.changePriceAndCallories(15, 10);
                    button.setAttribute("disabled", "disabled");
                    this.unlockPrice();
                    this.unlockSpices()
                }
                if (button.dataset.id == "spice") {
                    this.spice += "специи ";
                    this.changePriceAndCallories(15, 0);
                    button.setAttribute("disabled", "disabled");
                }
                if (button.dataset.id == "mayonnaise") {
                    this.spice += "майонез ";
                    this.changePriceAndCallories(20, 5);
                    button.setAttribute("disabled", "disabled");
                }
                if (button.dataset.id == "calculate") {
                    this.sayBurgerPrice();
                    this.hideAll();
                    this.showBurger();
                }
            })
        })
    }
    changePriceAndCallories(price, callories){
        this.price += price;
        this.callories += callories;
    }
    hideSizeChoose(){
        const sizeLock = document.querySelector(".burgers");
        sizeLock.setAttribute("hidden", "hidden");

    }
    unlockToppings(){
        const toppingsUnlcok = document.querySelector(".toppings");
        toppingsUnlcok.removeAttribute("hidden");
    }
    unlockPrice(){
        const calculateButton = document.querySelector(`[data-id="calculate"]`);
        calculateButton.removeAttribute("disabled");
    }
    unlockSpices(){
        const spicesUnlock = document.querySelector(".spices");
        spicesUnlock.removeAttribute("hidden");
    }
    sayBurgerPrice(){
        if (this.spice){
            alert(`Ваш ${this.size} бургер содержит ${this.topping}и ${this.spice}, стоит ${this.price} и содержит ${this.callories} каллорий`);
        }
        else {
            alert(`Ваш ${this.size} бургер содержит ${this.topping}стоит ${this.price} и включает ${this.callories} каллорий`);
        }
    }
    showBurger(){
        const img = document.createElement("img");
        img.src = "burger.jpg";
        document.body.appendChild(img);
    }
    hideAll(){
        const hide = document.querySelector(".burger-main");
        hide.setAttribute("hidden","hidden")
    }
}

let Borgar = new Burger()
Borgar.burgerButtonsHandler()
