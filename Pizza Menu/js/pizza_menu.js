function createReceipt() {
    var total = 0;
    var cheeseprice = 0;
    var crustprice = 0;
    var pepperoni = getPepperoni();
    var sausage = getSausage();
    var canadianBacon = getCanadianBacon();
    var groundBeef = getGroundBeef();
    var anchovy = getAnchovy();
    var chicken = getChicken();
    var meatArray = [];
    if(pepperoni == "Pepperoni"){
        meatArray.push(pepperoni);
    }
    if(sausage == "Sausage"){
        meatArray.push(sausage);
    }
    if(canadianBacon == "Canadian Bacon"){
        meatArray.push(canadianBacon);
    }
    if(groundBeef == "Ground Beef"){
        meatArray.push(groundBeef);
    }
    if(anchovy == "Anchovy"){
        meatArray.push(anchovy);
    }
    if(chicken == "Chicken"){
        meatArray.push(chicken);
    }
    var meatCost = (meatArray.length - 1);
    var tomatoes = getTomatoes();
    var onions = getOnions();
    var olives = getOlives();
    var greenPeppers = getGreenPeppers();
    var mushrooms = getMushrooms();
    var pineapple = getPineapple();
    var spinach = getSpinach();
    var jalapeno = getJalapeno();
    var veggieArray = [];
    if(tomatoes == "Tomatoes"){
        veggieArray.push(tomatoes);
    }
    if(onions == "Onions"){
        veggieArray.push(onions);
    }
    if(olives == "Olives"){
        veggieArray.push(olives);
    }
    if(mushrooms == "Mushrooms"){
        veggieArray.push(mushrooms);
    }
    if(greenPeppers == "Green Peppers"){
        veggieArray.push(greenPeppers);
    }
    if(pineapple == "Pineapple"){
        veggieArray.push(pineapple);
    }
    if(spinach == "Spinach"){
        veggieArray.push(spinach);
    }
    if(jalapeno == "Jalapeno"){
        veggieArray.push(jalapeno);
    }
    var veggieCost = veggieArray.length - 1;
    var size = checkSize();
    var sauce = checkSauce();
    var crust = checkCrust();
    var cheese = checkCheese();
    if(cheese == "Extra Cheese"){
        total = total + 3;
        cheeseprice = 3;
    }
    if(crust == "Cheese Stuffed Crust"){
        total = total + 3;
        crustprice = 3;
    }
    if(size == "Personal"){
        total = total + 6;
        sizeprice = 6;
    }
    else if(size == "Medium"){
        total = total + 10;
        sizeprice = 10;
    }
    else if(size == "Large"){
        total = total + 14;
        sizeprice = 14;
    }
    else if(size == "Extra Large"){
        total = total + 16;
        sizeprice = 16;
    }
    total = total + meatCost;
    total = total + veggieCost;
    var pizzasize = document.getElementById("pizzasize");
    pizzasize.innerHTML = size;
    var sizecost = document.getElementById("sizecost");
    sizecost.innerHTML = "$" + sizeprice + ".00";
    var pizzasauce = document.getElementById("pizzasauce");
    pizzasauce.innerHTML = sauce;
    var pizzacrust = document.getElementById("pizzacrust");
    pizzacrust.innerHTML = crust;
    var crustcost = document.getElementById("crustcost");
    crustcost.innerHTML = "$" + crustprice + ".00";
    var pizzacheese = document.getElementById("pizzacheese");
    pizzacheese.innerHTML = cheese;
    var cheesecost = document.getElementById("cheesecost");
    cheesecost.innerHTML = "$" + cheeseprice + ".00";
    var pizzameat = document.getElementById("pizzameat");
    pizzameat.innerHTML = meatArray;
    var meatcost = document.getElementById("meatcost");
    meatcost.innerHTML = "$" + meatCost + ".00";
    var pizzaveggies = document.getElementById("pizzaveggies");
    pizzaveggies.innerHTML = veggieArray;
    var veggiecost = document.getElementById("veggiecost");
    veggiecost.innerHTML = "$" + veggieCost + ".00";
    var totalcost = document.getElementById("totalcost");
    totalcost.innerHTML = "$" + total + ".00";
    showReceipt();
}//creates the receipt with the correct items and total

function showReceipt() {
    document.getElementById('receipt').style.display = 'block';
}//displays the receipt

function getSizeCost() {

}

function checkSize() {
    var size = "";
    if(document.getElementById("personal").checked == true){
        var size = "Personal";
    }
    else if(document.getElementById("medium").checked == true) {
        var size = "Medium";
    }
    else if(document.getElementById("large").checked == true) {
        var size = "Large";
    }
    else if(document.getElementById("extralarge").checked == true) {
        var size = "Extra Large";
    }
    else {
        alert("No size was chosen. Please try again.");
    }
    return size;
}//finds out which size of pizza is checked

function checkSauce() {
    var sauce = "";
    if(document.getElementById("marinara").checked == true){
        var sauce = "Marinara Sauce";
    }
    else if(document.getElementById("white").checked == true) {
        var sauce = "White Sauce";
    }
    else if(document.getElementById("barbeque").checked == true) {
        var sauce = "Barbeque Sauce";
    }
    else if(document.getElementById("none").checked == true) {
        var sauce = "No Sauce";
    }
    else {
        alert("No sauce was chosen. Please try again.");
    }
    return sauce;
}//finds out which kind of sauce is checked

function checkCrust() {
    var crust = "";
    if(document.getElementById("plain").checked == true){
        var crust = "Plain Crust";
    }
    else if(document.getElementById("garlic_butter").checked == true) {
        var crust = "Garlic Butter Crust";
    }
    else if(document.getElementById("cheese_stuffed").checked == true) {
        var crust = "Cheese Stuffed Crust";
    }
    else if(document.getElementById("spicy").checked == true) {
        var crust = "Spicy Crust";
    }
    else if(document.getElementById("house_special").checked == true) {
        var crust = "House Special Crust"
    }
    else {
        alert("No crust was chosen. Please try again.");
    }
    return crust;
}//finds out which kind of crust is checked

function checkCheese() {
    var cheese = "";
    if(document.getElementById("regular").checked == true){
        var cheese = "Regular Cheese";
    }
    else if(document.getElementById("nocheese").checked == true) {
        var cheese = "No Cheese";
    }
    else if(document.getElementById("extracheese").checked == true) {
        var cheese = "Extra Cheese";
    }
    else {
        alert("No cheese was chosen. Please try again.");
    }
    return cheese;
}

function getPepperoni() {
    var meat1 = "";
    meat1 = document.getElementById("meat0");
    if(meat1.checked == true) {
        meat1 = "Pepperoni";
    }
    return meat1;
}//checks if pepperoni is checked

function getSausage() {
    var meat1 = "";
    meat1 = document.getElementById("meat1");
    if(meat1.checked == true) {
        meat1 = "Sausage";
    }
    return meat1;
}//checks if sausage is checked

function getCanadianBacon() {
    var meat1 = "";
    meat1 = document.getElementById("meat2");
    if(meat1.checked == true) {
        meat1 = "Canadian Bacon";
    }
    return meat1;
}//checks if canadian bacon is checked

function getGroundBeef() {
    var meat1 = "";
    meat1 = document.getElementById("meat3");
    if(meat1.checked == true) {
        meat1 = "Ground Beef";
    }
    return meat1;
}//checks if ground beef is checked

function getAnchovy() {
    var meat1 = "";
    meat1 = document.getElementById("meat4");
    if(meat1.checked == true) {
        meat1 = "Anchovy";
    }
    return meat1;
}//checks if anchovy is checked

function getChicken() {
    var meat1 = "";
    meat1 = document.getElementById("meat5");
    if(meat1.checked == true) {
        meat1 = "Chicken";
    }
    return meat1;
}//checks if chicken is checked

function getTomatoes() {
    var veggie = "";
    veggie = document.getElementById("veggie0");
    if(veggie.checked == true) {
        veggie = "Tomatoes";
    }
    return veggie;
}//checks if tomatoes is checked

function getOnions() {
    var veggie = "";
    veggie = document.getElementById("veggie1");
    if(veggie.checked == true) {
        veggie = "Onions";
    }
    return veggie;
}//checks if onions is checked

function getOlives() {
    var veggie = "";
    veggie = document.getElementById("veggie2");
    if(veggie.checked == true) {
        veggie = "Olives";
    }
    return veggie;
}//checks if olives is checked

function getGreenPeppers() {
    var veggie = "";
    veggie = document.getElementById("veggie3");
    if(veggie.checked == true) {
        veggie = "Green Peppers";
    }
    return veggie;
}//checks if green peppers is checked

function getMushrooms() {
    var veggie = "";
    veggie = document.getElementById("veggie4");
    if(veggie.checked == true) {
        veggie = "Mushrooms";
    }
    return veggie;
}//checks if mushrooms is checked

function getPineapple() {
    var veggie = "";
    veggie = document.getElementById("veggie5");
    if(veggie.checked == true) {
        veggie = "Pineapple";
    }
    return veggie;
}//checks if pineapple is checked

function getSpinach() {
    var veggie = "";
    veggie = document.getElementById("veggie6");
    if(veggie.checked == true) {
        veggie = "Spinach";
    }
    return veggie;
}//checks if spinach is checked

function getJalapeno() {
    var veggie = "";
    veggie = document.getElementById("veggie7");
    if(veggie.checked == true) {
        veggie = "Jalapeno";
    }
    return veggie;
}//checks if jalapeno is checked