//create interface

// interface tableContent{
//     name:string,
//     fixedAmount:number,
//     interestRate:number,
//     annualInterest:string
// }
//
let  table_content_array  =[];

let input_owner_name = document.getElementById("ownerName") as HTMLInputElement;
let input_fixed_amount = document.getElementById("fixedAmount") as HTMLInputElement;
let input_newInterest_rate = document.getElementById("newInterestRate") as HTMLInputElement;

let tableBody = document.getElementById("fixedDepositTableBody")
const table_row_element = document.createElement("tr");

document.getElementById("addFixBtn").addEventListener("click",function () {

    let ownerName = input_owner_name.value;
    let principalAmount = input_fixed_amount.value;
    let interestRate = input_newInterest_rate.value;
    let principal_amount_convert = Number.parseInt(principalAmount);
    let interestRateCovert = Number.parseInt(input_newInterest_rate.value);

    if (!principal_amount_convert) principal_amount_convert = 0;
    if (!interestRateCovert) interestRateCovert = 0;

    let interestAmount = calculateInterestRatePerYear(principal_amount_convert,interestRateCovert);

    let tuple :[string,number,number,string] = [ownerName,principal_amount_convert,interestRateCovert,interestAmount]
    table_content_array.push(tuple);
    addRows(ownerName,principalAmount,interestRate,interestAmount);

});

document.getElementById("updateInterestBtn").addEventListener("click",function () {

    let interestRate = input_newInterest_rate.value;
    for (let i = 0; i<table_content_array.length; i++){

        let tableRow = document.querySelector(`#fixedDepositTableBody>tr:nth-child(${i+1})`) as HTMLTableRowElement;
        let customerAmount = tableRow.cells.item(1).textContent;
        tableRow.cells.item(2).innerText = interestRate+"%";
        tableRow.cells.item(3).innerText = calculateInterestRatePerYear(Number.parseInt(customerAmount),Number.parseInt(interestRate))+".00";

    }



});



// add rows to the table
function addRows(ownerName:string,principalAmount:string,interestRate:string,amount:string){
    if (interestRate == '') interestRate = "0"
    const table_row_element = document.createElement("tr");
    let htmlTableRowElement = tableBody.appendChild(table_row_element);
    htmlTableRowElement.innerHTML = `<td>${ownerName}</td><td>${principalAmount}</td><td>${interestRate+"%"}</td><td>${amount}</td>`
}


//calculate the interest rate
function calculateInterestRatePerYear(principalAmount:number,interestRate:number):string {
    return (principalAmount * interestRate)/100+"";
}