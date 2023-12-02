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

let name_input_element =document.getElementById('ownerName') as HTMLInputElement;
let fixedAmountElement = document.getElementById('fixedAmount') as HTMLInputElement;

let addFixedBtn = document.getElementById('addFixBtn');



addFixedBtn.addEventListener('click',function () {

    let ownerName = name_input_element.value;
    let fixedAmount = fixedAmountElement.value;
    let annualInterestRate = (rate * +fixedAmount)/100

    let account = new Account(ownerName,fixedAmount,rate,annualInterestRate);

    console.log(`owner : ${ownerName} and fixed value is ${fixedAmount}`)

});