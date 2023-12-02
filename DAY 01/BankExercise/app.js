var Account = /** @class */ (function () {
    function Account(owner_name, fixed_amount, interest_rate, annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = interest_rate;
        this.annual_interest = annual_interest;
    }
    return Account;
}());
var rate = 12.5;
var name_input_element = document.getElementById('ownerName');
var fixedAmountElement = document.getElementById('fixedAmount');
var addFixedBtn = document.getElementById('addFixBtn');
addFixedBtn.addEventListener('click', function () {
    var ownerName = name_input_element.value;
    var fixedAmount = fixedAmountElement.value;
    var annualInterestRate = (rate * +fixedAmount) / 100;
    var account = new Account(ownerName, fixedAmount, rate, annualInterestRate);
    console.log("owner : ".concat(ownerName, " and fixed value is ").concat(fixedAmount));
});
