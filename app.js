// common Function for phone
function phone(isIncreasing) {
    let phnInput = document.getElementById('phn-inputNum');
    let phnInputValue = phnInput.value;

    if (isIncreasing) {
        phnInputValue = parseInt(phnInputValue) + 1;
    }
    else if (phnInputValue > 0) {
        phnInputValue = parseInt(phnInputValue) - 1;
    }
    phnInput.value = phnInputValue;
    // phone total calculation
    let phoneTotal = document.getElementById('phn-total');
    let phoneTotalValue = phoneTotal.innerText;
    phoneTotal.innerText = phnInputValue * 1312;
    console.log(phoneTotalValue);

}


document.getElementById('phone-plus').addEventListener('click', function () {
    phone(true);

})
document.getElementById('phn-minus').addEventListener('click', function () {
    phone(false);


})
// common Function for phone case
function phonecase(isIncreasing) {
    let phnInput = document.getElementById('case-InputNumber');
    let phnInputValue = phnInput.value;

    if (isIncreasing) {
        phnInputValue = parseInt(phnInputValue) + 1;
    }
    else if (phnInputValue > 0) {
        phnInputValue = parseInt(phnInputValue) - 1;
    }
    phnInput.value = phnInputValue;
    // phone total calculation
    let phoneTotal = document.getElementById('case-total');
    let phoneTotalValue = phoneTotal.innerText;
    phoneTotal.innerText = phnInputValue * 40;
    console.log(phoneTotalValue);

}


document.getElementById('phn-case-plus').addEventListener('click', function () {
    phonecase(true);

})
document.getElementById('phn-case-minus').addEventListener('click', function () {
    phonecase(false);


})