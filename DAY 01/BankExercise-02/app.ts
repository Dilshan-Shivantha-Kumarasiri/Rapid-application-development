let name_input_element =document.getElementById('ownerName') as HTMLInputElement;
let fixedAmountElement = document.getElementById('fixedAmount') as HTMLInputElement;

let addFixedBtn = document.getElementById('addFixBtn');



addFixedBtn.addEventListener('click',function () {

    let ownerName = name_input_element.value;
    let fixedAmount = fixedAmountElement.value;
    console.log(`owner : ${ownerName} and fixed value is ${fixedAmount}`);

    let tableRow = `<tr><td>${ownerName}</td><td>${fixedAmount}</td></tr>`


    let tableContent = document.getElementById("fixedDepositTableBody");
    let htmlTableRowElement = tableContent.appendChild(document.createElement("tr"));
    htmlTableRowElement.innerHTML = tableRow;




});