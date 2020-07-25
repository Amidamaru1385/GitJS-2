let modal = document.getElementById('cart-window');


const btn = document.getElementById("cart-btn");


const span = document.getElementsByClassName("close")[0];


btn.addEventListener("click",() =>{
    modal.style.display = "block";
})

span.addEventListener("click",() =>{
    modal.style.display = "none";
})

window.addEventListener("click",() =>{
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
