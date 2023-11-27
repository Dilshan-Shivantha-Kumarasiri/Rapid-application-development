var name_input_element = document.getElementById('ownerName');
var fixedAmountElement = document.getElementById('fixedAmount');
var addFixedBtn = document.getElementById('addFixBtn');
addFixedBtn.addEventListener('click', function () {
    var ownerName = name_input_element.value;
    var fixedAmount = fixedAmountElement.value;
    // console.log(ownerName);
    // console.log(fixedAmount);
    console.log("owner : ".concat(ownerName, " and fixed value is ").concat(fixedAmount));
});
