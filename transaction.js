document.addEventListener('DOMContentLoaded',() =>{

    const currentProfileName = localStorage.getItem('current-profile');
    
    let currentProfileInfo = localStorage.getItem(`${currentProfileName}`);
    currentProfileInfo = JSON.parse(currentProfileInfo);

    let salary = currentProfileInfo['profileSalary'];

    const transactionForm = document.querySelector('.transaction-form')

    transactionForm.addEventListener('submit', function(e){
            e.preventDefault();

            const transactionDate = document.querySelector('#transaction-date').value.trim();
            const description = document.querySelector('#description').value.trim();
            const category = document.querySelector('#category').value;
            const amount = document.querySelector('#amount').value.trim();
            // const transactionType = document.querySelector('#transaction-type').value;

            console.log(transactionDate, description, category, amount);

            if(transactionDate < currentProfileInfo['profileStartDate']){
                const errorDiv = document.querySelector('.form-error')
                errorDiv.textContent = ' Trx date must be greater than tracking start data';
                errorDiv.style.display = 'block'; 
                
            }
            else{
                let totalExpenses;

                if('profileExpenses' in currentProfileInfo){
                    totalExpenses = currentProfileInfo['profileExpenses'];
                    console.log( typeof totalExpenses, typeof amount);
                    totalExpenses = Number(totalExpenses) + Number(amount);
                    
                }
                else{
                    totalExpenses = amount; // Add current tranasction amount
                }
                console.log('Exp : ', totalExpenses);
                


                const newTransaction = {
                    transactionDate : transactionDate,
                    description : description,
                    category : category,
                    transactionAmount : amount
                }

                let transactionArray;
                if('profileTransactions' in currentProfileInfo){
                        //Note that profileTransactions is an array.

                    transactionArray = currentProfileInfo['profileTransactions'];
                    transactionArray.push(newTransaction);
                }
                else{
                    transactionArray= [newTransaction];
                }

                // Now we have prev currentProfileInfo, 
                // new transactionInfo and totalExpenses.
                // Lets update them.

                currentProfileInfo['profileExpenses'] = totalExpenses;
                currentProfileInfo['profileTransactions'] = transactionArray;
                

                // Now lets update this JS object back into the profile.

                localStorage.setItem(`${currentProfileName}`,JSON.stringify(currentProfileInfo))
                
                
                transactionForm.reset();
                alert('Transaction added successfully!');
                window.location.reload();
            }
        }
    
    )




})           

