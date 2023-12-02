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
var accounts = [];
var name_input_element = document.getElementById('ownerName');
var fixedAmountElement = document.getElementById('fixedAmount');
var newInterestRate = document.getElementById('newInterestRate');
var addFixedBtn = document.getElementById('addFixBtn');
var table_body = document.getElementById("fixedDepositTableBody");
addFixedBtn.addEventListener('click', function () {
    var ownerName = name_input_element.value;
    var fixedAmount = fixedAmountElement.value;
    var annualInterestRate = (rate * +fixedAmount) / 100;
    var account = new Account(ownerName, fixedAmount, rate, annualInterestRate);
    accounts.push(account);
    console.log(accounts);
    updateTable();
});
function updateTable() {
    table_body.innerHTML = "";
    accounts.map(function (r) {
        var record_element = "<td>".concat(r.owner_name, "</td><td>").concat(r.fixed_amount, "</td> <td>").concat(r.interest_rate, "</td><td>").concat(r.annual_interest, "</td>");
        var table_row = document.createElement("tr");
        table_row.innerHTML = record_element;
        table_body.appendChild(table_row);
    });
}
//update btn
document.getElementById("updateInterestBtn").addEventListener("click", function () {
    var number = 0;
    // accounts.map(r =>{
    //     table_body.children.item(number).children.item(2).innerHTML = `<td>${r.interest_rate}</td>`
    //     number+=number+1
    // })
    for (var i = 0; i < accounts.length; i++) {
        // table_body.children.item(i).children.item(i).textContent;
        var annualInterestRate = (+newInterestRate.value * accounts.at(i).fixed_amount) / 100;
        var newAccounts = [];
    }
});
