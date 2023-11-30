//create interface
// interface tableContent{
//     name:string,
//     fixedAmount:number,
//     interestRate:number,
//     annualInterest:string
// }
//
var table_content_array = [];
var input_owner_name = document.getElementById("ownerName");
var input_fixed_amount = document.getElementById("fixedAmount");
var input_newInterest_rate = document.getElementById("newInterestRate");
var tableBody = document.getElementById("fixedDepositTableBody");
var table_row_element = document.createElement("tr");
document.getElementById("addFixBtn").addEventListener("click", function () {
    var ownerName = input_owner_name.value;
    var principalAmount = input_fixed_amount.value;
    var interestRate = input_newInterest_rate.value;
    var principal_amount_convert = Number.parseInt(principalAmount);
    var interestRateCovert = Number.parseInt(input_newInterest_rate.value);
    if (!principal_amount_convert)
        principal_amount_convert = 0;
    if (!interestRateCovert)
        interestRateCovert = 0;
    var interestAmount = calculateInterestRatePerYear(principal_amount_convert, interestRateCovert);
    var tuple = [ownerName, principal_amount_convert, interestRateCovert, interestAmount];
    table_content_array.push(tuple);
    addRows(ownerName, principalAmount, interestRate, interestAmount);
});
document.getElementById("updateInterestBtn").addEventListener("click", function () {
    var interestRate = input_newInterest_rate.value;
    for (var i = 0; i < table_content_array.length; i++) {
        var tableRow = document.querySelector("#fixedDepositTableBody>tr:nth-child(".concat(i + 1, ")"));
        var customerAmount = tableRow.cells.item(1).textContent;
        tableRow.cells.item(2).innerText = interestRate + "%";
        tableRow.cells.item(3).innerText = calculateInterestRatePerYear(Number.parseInt(customerAmount), Number.parseInt(interestRate)) + ".00";
    }
});
// add rows to the table
function addRows(ownerName, principalAmount, interestRate, amount) {
    if (interestRate == '')
        interestRate = "0";
    var table_row_element = document.createElement("tr");
    var htmlTableRowElement = tableBody.appendChild(table_row_element);
    htmlTableRowElement.innerHTML = "<td>".concat(ownerName, "</td><td>").concat(principalAmount, "</td><td>").concat(interestRate + "%", "</td><td>").concat(amount, "</td>");
}
//calculate the interest rate
function calculateInterestRatePerYear(principalAmount, interestRate) {
    return (principalAmount * interestRate) / 100 + "";
}
