var name_input_element = document.getElementById('ownerName');
var fixedAmountElement = document.getElementById('fixedAmount');
var addFixedBtn = document.getElementById('addFixBtn');
var tableContent = document.getElementById("fixedDepositTableBody");
var interest_value = document.getElementById("newInterestRate");
addFixedBtn.addEventListener('click', function () {
    var ownerName = name_input_element.value;
    var fixedAmount = fixedAmountElement.value;
    console.log("owner : ".concat(ownerName, " and fixed value is ").concat(fixedAmount));
    var tableRow = "<tr><td>".concat(ownerName, "</td><td>").concat(fixedAmount, "</td><td>0<td><td>0<td></tr>");
    var htmlTableRowElement = tableContent.appendChild(document.createElement("tr"));
    htmlTableRowElement.innerHTML = tableRow;
    // get row count in tbody
    var childElementCount = tableContent.childElementCount;
    // add table to interest rate
    var childRow = tableContent.children.item(0).children.item(2).innerHTML;
    console.log(childRow);
    // enter cells
    // let htmlTableCellElement = htmlTableRowElement.insertCell(3);
    // htmlTableCellElement.innerText = "5"
});
document.getElementById('updateInterestBtn').addEventListener("click", function () {
    //add table to the interest rate
    var childElementCount = tableContent.childElementCount;
    for (var i = 0; i < childElementCount; i++) {
        tableContent.children.item(i).children.item(2).innerHTML = interest_value.value;
    }
});
