// Global variables
var crust = document.getElementById("crust").value;
var sauce = document.getElementById("sauce").value;

// toppings array
var toppings = [];

// event listener
var formBtn = document.getElementById("btn");

formBtn.addEventListener("click",function(event){
    event.preventDefault();

    var topping1 = document.getElementById("top1").value;
    var topping2 = document.getElementById("top2").value;
    var topping3 = document.getElementById("top3").value;
    
    toppings.push(topping1, topping2, topping3);

    console.log(toppings);
    
    calculateTotal(toppings);
    
});



function calculateTotal(toppingArray){
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50;   //cost of crust and sauce

    //order string concatenation
    let orderString = crust + " Pizza with " + sauce;
    let toppingString = "Toppings: ";

    //for loop
    for(let i=0; i < toppingArray.length; i++){
        if(toppingArray[i]!=""){
            toppingString += toppingArray[i] + " ";
            total += toppingCost;
        }
    }

    // total = baseCost + cost of all toppings
    total += baseCost;

    //set DOM total += total
    document.getElementById("total").innerHTML += total;
    //use DOM: = orderString
    document.getElementById("pizzaOrder").innerHTML = orderString;
    //use DOM: = toppingString
    document.getElementById("toppings").innerHTML = toppingString;
}