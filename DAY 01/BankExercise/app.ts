class Account {

    owner_name;
    fixed_amount;
    interest_rate;
    annual_interest;

    constructor(owner_name,fixed_amount,interest_rate,annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = interest_rate;
        this.annual_interest = annual_interest;

    }
}

let rate = 12.5;
let accounts: Account[] = []

let name_input_element =document.getElementById('ownerName') as HTMLInputElement;
let fixedAmountElement = document.getElementById('fixedAmount') as HTMLInputElement;
let newInterestRate = document.getElementById('newInterestRate') as HTMLInputElement;

let addFixedBtn = document.getElementById('addFixBtn');
let table_body = document.getElementById("fixedDepositTableBody");




addFixedBtn.addEventListener('click',function () {

    let ownerName = name_input_element.value;
    let fixedAmount = fixedAmountElement.value;
    let annualInterestRate = (rate * +fixedAmount)/100

    let account = new Account(ownerName,fixedAmount,rate,annualInterestRate);
    accounts.push(account);

    console.log(accounts)
    updateTable();
});

function updateTable() {

    table_body.innerHTML = ""

    accounts.map(r => { // iterating the accounts array
        let record_element = `<td>${r.owner_name}</td><td>${r.fixed_amount}</td> <td>${r.interest_rate}</td><td>${r.annual_interest}</td>`
        let table_row = document.createElement("tr");
        table_row.innerHTML = record_element;
        table_body.appendChild(table_row);

    })
}

//update btn

document.getElementById("updateInterestBtn").addEventListener("click",function () {

    let number = 0;

    // accounts.map(r =>{
    //     table_body.children.item(number).children.item(2).innerHTML = `<td>${r.interest_rate}</td>`
    //     number+=number+1
    // })


    for (let i = 0; i<accounts.length; i++){
        // table_body.children.item(i).children.item(i).textContent;
        let annualInterestRate = (+newInterestRate.value * accounts.at(i).fixed_amount)/100
        let newAccounts: Account[] = []


        


    }
});