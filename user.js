document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    let nameDispay = document.querySelector('.profile-name');

    nameDispay.textContent = `Welcome ${currentProfileName},`;
    
    let currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    

    currentProfileInfo = JSON.parse(currentProfileInfo)
    // console.log(currentProfileInfo);
    // console.log(currentProfileInfo['profileExpenses']);
    
    const currency = currentProfileInfo['profileCurrency'] ;

    let profileSalaryDisplay = document.querySelector('.profile-salary');
    let salary = currentProfileInfo['profileSalary'];

    profileSalaryDisplay.textContent = `Total income : ${salary} ${currency}`;

    let profileSavingsGoalDisplay = document.querySelector('.profile-savings-goal');
    profileSavingsGoalDisplay.textContent = `Savings goal : ${currentProfileInfo['profileSavingsGoal']} ${currency}`;

    let profileEmailDisplay = document.querySelector('.profile-email');
    profileEmailDisplay.textContent = `Email : ${currentProfileInfo['profileEmail']}`;

    let profileStartDateDisplay = document.querySelector('.profile-start-date');
    profileStartDateDisplay.textContent = `Start Date : ${currentProfileInfo['profileStartDate']}`;

    let profileExpensesDisplay = document.querySelector('.profile-expenses');
    let totalExpenses = 0;

    if('profileExpenses' in currentProfileInfo){
        totalExpenses = Number(currentProfileInfo['profileExpenses']);
        
        profileExpensesDisplay.textContent = `Total expenses : ${totalExpenses} ${currency} `;
    }
    else{
        profileExpensesDisplay.innerHTML = 
            `Total expenses : 0 <br/> <span class="text-base text-red-500"> Add more transactions! </span>`;
    }

    let netIncome = Number(salary)-totalExpenses;

    let profileNetIncomeDisplay = document.querySelector('.profile-net-income');

    if(netIncome <1000 && netIncome > 0 ){
        profileNetIncomeDisplay.innerHTML = ` Net income : ${netIncome} ${currency} <br> <p class='text-lg text-amber-600'> Warning! Nearing money overuse. </p> `;
    }
    else if(netIncome <0){
        profileNetIncomeDisplay.innerHTML = ` Net income : ${netIncome} ${currency} <br> <p class='text-lg text-red-800'> Warning! You are under debt. </p> `;
    }
    else{
        profileNetIncomeDisplay.innerHTML = ` Net income : ${netIncome} ${currency} `;
    }    
    let profileTransactionsDisplay = document.querySelector('.transactions')
    
    if('profileTransactions' in currentProfileInfo){

        let transactionArray = currentProfileInfo['profileTransactions'];

        transactionArray.forEach( (trx,index) => {
            // console.log(trx.transactionDate);
            // console.log(trx.description);
            // console.log(trx.category);
            // console.log(trx.transactionAmount);

            const transElem = document.createElement('div');
            transElem.innerHTML = `<p> Txn No : ${index+1} </p>
                                <p> Transaction date : ${trx.transactionDate} </p> 
                                <p> Description : ${trx.description} </p> 
                                <p> Category : ${trx.category} </p>
                                <p> Transaction amount : ${trx.transactionAmount} ${currency} </p>
                                <input type='hidden' value='${index}' id='delete-trx-index'>
                                <button type='button' class='bg-red-400 rounded text-md font-medium text-white hover:bg-red-500 hover:scale-105 p-2' id='delete-btn'> Delete Txn </button> 
                                `
            profileTransactionsDisplay.appendChild(transElem);
            

        });
    }

    
    

    
    
    
})           

