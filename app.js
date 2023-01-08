// common Function for phone
function phone(product, isIncreasing, price) {
    let productInput = document.getElementById(product + '-inputNum');

    let productInputValue = productInput.value;



    if (isIncreasing) {
        productInputValue = parseInt(productInputValue) + 1;
    }
    else if (productInputValue > 0) {
        productInputValue = parseInt(productInputValue) - 1;
    }
    productInput.value = productInputValue;
    //  total calculation
    let productTotal = document.getElementById(product + '-total');


    productTotal.innerText = productInputValue * price;
    // console.log(phoneTotalValue);
    calculateTotal();
}

// function for subtotal
function getInputValue(product) {
    let productInput = document.getElementById(product + '-inputNum');
    let productInputValue = parseInt(productInput.value);
    return productInputValue;
}
function calculateTotal() {
    let phnTotal = getInputValue("phn") * 1312;
    let caseTotal = getInputValue("case") * 40;
    let subTotal = phnTotal + caseTotal;
    let tax = subTotal / 10;
    let total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    phone("phn", true, 1312);

})
document.getElementById('phn-minus').addEventListener('click', function () {
    phone("phn", false, 1312);
})
// case

document.getElementById('case-plus').addEventListener('click', function () {
    phone("case", true, 40);
    // console.log("case clicked");

})
document.getElementById('case-minus').addEventListener('click', function () {
    phone("case", false, 40);


})



