let ownerName_inputElement = document.getElementById('ownerName') as HTMLInputElement;
let fixedAmount_inputElement = document.getElementById('fixedAmount') as HTMLInputElement;
let newInterestRate_inputElement = document.getElementById('newInterestRate') as HTMLInputElement;

let addFix_btn = document.getElementById('addFixBtn');
let updateInterestBtn = document.getElementById('updateInterestBtn');
let table_body = document.getElementById('fixedDepositTableBody');

let rate = +12.5;
let accounts:Account_Details [] = [];
let new_accounts:Account_Details [] = [];

addFix_btn.addEventListener('click',() =>{
    let ownerName =  ownerName_inputElement.value;
    let fixedAmount = fixedAmount_inputElement.value;



    let annual_interest = (+fixedAmount*12.5)/100;
    let account =  new Account_Details(ownerName,+fixedAmount,rate,annual_interest);
    accounts.push(account);
    console.log(accounts);
    updateTable();
});

updateInterestBtn.addEventListener('click',()=>{
    let new_rate = newInterestRate_inputElement.value;
    rate = +new_rate;
    // for (let i = 0; i < accounts.length; i++) {
    //    accounts[i].interest_rate=rate;
    // }
    accounts.map(r =>{
        // r.interest_rate=rate;
        // r.annual_interest=(r.fixed_amount*r.interest_rate)/100;
        r.update_rate(rate);
        new_accounts.push(r);
    });
    accounts=new_accounts;
    updateTable();
});

function updateTable() {
    table_body.innerHTML="";

    accounts.map(r => {
        let record_element = document.createElement('tr');
        let record_data = `<td>${r.owner_name}</td>
                         <td>${r.fixed_amount}</td>
                         <td>${r.interest_rate}</td>
                         <td>${r.annual_interest}</td>`;

        record_element.innerHTML = record_data;
        table_body.appendChild(record_element);
    });
}

class Account_Details {
    owner_name:string;
    fixed_amount:number;
    interest_rate:number;
    annual_interest:number;

    constructor(owner_name:string,fixed_amount:number,interest_rate:number,annual_interest:number) {
        this.owner_name=owner_name;
        this.fixed_amount=fixed_amount;
        this.interest_rate=interest_rate;
        this.annual_interest=annual_interest;
    }

    update_rate(rate : number):void{
        this.interest_rate=rate;
        this.annual_interest=(this.fixed_amount*rate)/100;
    }
}
