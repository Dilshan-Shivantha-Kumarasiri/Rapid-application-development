let name_input_element =document.getElementById('ownerName') as HTMLInputElement;
let fixedAmountElement = document.getElementById('fixedAmount') as HTMLInputElement;

let addFixedBtn = document.getElementById('addFixBtn');

let tableContent = document.getElementById("fixedDepositTableBody");
let interest_value = document.getElementById("newInterestRate") as HTMLInputElement;
addFixedBtn.addEventListener('click',function () {

    let ownerName = name_input_element.value;
    let fixedAmount = fixedAmountElement.value;
    console.log(`owner : ${ownerName} and fixed value is ${fixedAmount}`);

    let tableRow = `<tr><td>${ownerName}</td><td>${fixedAmount}</td><td>0<td><td>0<td></tr>`

    let htmlTableRowElement = tableContent.appendChild(document.createElement("tr"));
    htmlTableRowElement.innerHTML = tableRow;

    // get row count in tbody
    let childElementCount = tableContent.childElementCount;

    // add table to interest rate
    let childRow = tableContent.children.item(0).children.item(2).innerHTML;
    console.log(childRow)

    // enter cells
    // let htmlTableCellElement = htmlTableRowElement.insertCell(3);
    // htmlTableCellElement.innerText = "5"

});

document.getElementById('updateInterestBtn').addEventListener("click",function () {

    //add table to the interest rate
    let childElementCount = tableContent.childElementCount;
    for (let i = 0; i<childElementCount; i++){
        tableContent.children.item(i).children.item(2).innerHTML = interest_value.value;
    }


})