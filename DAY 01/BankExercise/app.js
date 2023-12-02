var ownerName_inputElement = document.getElementById('ownerName');
var fixedAmount_inputElement = document.getElementById('fixedAmount');
var newInterestRate_inputElement = document.getElementById('newInterestRate');
var addFix_btn = document.getElementById('addFixBtn');
var updateInterestBtn = document.getElementById('updateInterestBtn');
var table_body = document.getElementById('fixedDepositTableBody');
var rate = +12.5;
var accounts = [];
var new_accounts = [];
addFix_btn.addEventListener('click', function () {
    var ownerName = ownerName_inputElement.value;
    var fixedAmount = fixedAmount_inputElement.value;
    var annual_interest = (+fixedAmount * 12.5) / 100;
    var account = new Account_Details(ownerName, +fixedAmount, rate, annual_interest);
    accounts.push(account);
    console.log(accounts);
    updateTable();
});
updateInterestBtn.addEventListener('click', function () {
    var new_rate = newInterestRate_inputElement.value;
    rate = +new_rate;
    // for (let i = 0; i < accounts.length; i++) {
    //    accounts[i].interest_rate=rate;
    // }
    accounts.map(function (r) {
        // r.interest_rate=rate;
        // r.annual_interest=(r.fixed_amount*r.interest_rate)/100;
        r.update_rate(rate);
        new_accounts.push(r);
    });
    accounts = new_accounts;
    updateTable();
});
function updateTable() {
    table_body.innerHTML = "";
    accounts.map(function (r) {
        var record_element = document.createElement('tr');
        var record_data = "<td>".concat(r.owner_name, "</td>\n                         <td>").concat(r.fixed_amount, "</td>\n                         <td>").concat(r.interest_rate, "</td>\n                         <td>").concat(r.annual_interest, "</td>");
        record_element.innerHTML = record_data;
        table_body.appendChild(record_element);
    });
}
var Account_Details = /** @class */ (function () {
    function Account_Details(owner_name, fixed_amount, interest_rate, annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = interest_rate;
        this.annual_interest = annual_interest;
    }
    Account_Details.prototype.update_rate = function (rate) {
        this.interest_rate = rate;
        this.annual_interest = (this.fixed_amount * rate) / 100;
    };
    return Account_Details;
}());
