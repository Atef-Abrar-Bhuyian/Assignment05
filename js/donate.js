document.getElementById('donate-btn1').addEventListener('click', function(){
    const donate = getInputFieldValueById('input-donate');
    const balance = getTextFieldById('account-balance');

    if(isNaN(donate) || donate <= 0){
        alert('You Did Something Wrong, Please Try again');
        return;
    }

    if(balance<=0 || donate>balance){
        alert('Insufficient Balance');
        return;
    }

    const newBalance = balance - donate;

    const singleDonate = document.getElementById('donation').innerText;
    const singleDonateNumber = parseFloat(singleDonate);

    const currentSingleDonate = donate + singleDonateNumber;
    document.getElementById('donation').innerText = currentSingleDonate;
    document.getElementById('account-balance').innerText = newBalance;

    document.getElementById('no-history').classList.add('hidden');

    // getting current time and date
    const currentDate = new Date();
    const fullDateAndTime = currentDate.toString();

    // Donate History
    const div = document.createElement('div');
        div.classList.add('border-2', 'p-8', 'rounded-xl', 'mb-6');
        div.innerHTML = `
            <p class="font-bold text-xl text-gray-clr">${donate} Taka is Donated for famine-2024 at Noakhali, Bangladesh. </p>
            <p class=" text-gray-clr text-opacity-70">Date: ${fullDateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);

        my_modal_1.showModal();
})