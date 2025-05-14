document.addEventListener('DOMContentLoaded', function() {
    const txndeleteBtns = document.querySelectorAll('#delete-btn');
    // const txndeleteIndexVals = document.querySelector('#delete-trx-index')

    txndeleteBtns.forEach( (txndeleteBtn, btnIndex) => {

        txndeleteBtn.addEventListener("click", function() {

            console.log( btnIndex);

            const currentProfileName = localStorage.getItem('current-profile')

            let currentProfileInfo = localStorage.getItem(`${currentProfileName}`)

            currentProfileInfo = JSON.parse(currentProfileInfo);

            let transactionArray = currentProfileInfo['profileTransactions'];

            // console.log( transactionArray.length);

            // Before We delete the index element lets get its value here

            const deletedTrx = transactionArray[btnIndex];

            transactionArray.splice(btnIndex,1);

            // Currently correct transactionArray remains.
            // But expenses must be changed accordingly also.

            let totalExpenses = Number(currentProfileInfo['profileExpenses'])
            console.log(totalExpenses, deletedTrx['transactionAmount']);

            totalExpenses = totalExpenses - Number(deletedTrx['transactionAmount']);


            // Now update the currentProfileInfo object with changed values.
            currentProfileInfo['profileExpenses'] = totalExpenses;
            currentProfileInfo['profileTransactions'] = transactionArray;


            localStorage.setItem(`${currentProfileName}`, JSON.stringify(currentProfileInfo));
            alert(' Transaction Deleted Successfully! ');
            window.location.reload();

            
        });
    });
});
