const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const trackButton = document.getElementById("trackButton");
const orderNumberInput = document.getElementById("orderNumber");
const orderStatus = document.getElementById("orderStatus");
const product = document.getElementById("product");

function fetchOrderStatus(orderNumber) {
    // ... your existing fetchOrderStatus code ...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orders = {
                "123": "5",
                "456": "4",
                "789": "3",
                "111": "2",
                "000": "1",
            };

            if (orderNumber in orders) {
                resolve(orders[orderNumber]);
                moveProgress(orders[orderNumber]);
            } else {
                reject("Order not found");
            }
        }, 1000); // Simulated delay of 1 second
    });
}


async function trackOrder(){
    const enteredOrderNumber = orderNumberInput.value;
    fetchOrderStatus(enteredOrderNumber);
}

function moveProgress(order){
    if(order >= "1"){
        one.onclick();
    }
    if(order >= "2"){
        setTimeout(two.onclick,1000);
    }
    if(order>="3"){
    setTimeout(three.onclick,2000);
    }
    if(order>="4"){
    setTimeout(four.onclick,3000);}
    if(order>="5"){
    
    setTimeout(five.onclick,4000);}
}

trackButton.addEventListener("click", trackOrder);




one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    console.log("1");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    console.log("2");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
    console.log("3");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
    console.log("4");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    console.log("5");
}


