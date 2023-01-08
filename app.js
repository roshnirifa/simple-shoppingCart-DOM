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




// common Function for phone case
// function phonecase(isIncreasing) {
//     let caseInput = document.getElementById('case-InputNumber');
//     let caseInputValue = caseInput.value;

//     if (isIncreasing) {
//         caseInputValue = parseInt(caseInputValue) + 1;
//     }
//     else if (caseInputValue > 0) {
//         caseInputValue = parseInt(caseInputValue) - 1;
//     }
//     caseInput.value = caseInputValue;
//     // phone total calculation
//     let caseTotal = document.getElementById('case-total');
//     let caseTotalValue = caseTotal.innerText;
//     caseTotal.innerText = caseInputValue * 40;
//     console.log(caseTotalValue);

// }


// document.getElementById('phn-case-plus').addEventListener('click', function () {
//     phonecase(true);

// })
// document.getElementById('phn-case-minus').addEventListener('click', function () {
//     phonecase(false);


// })