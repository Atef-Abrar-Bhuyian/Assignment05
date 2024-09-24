// input for 1st donate btn
document.getElementById('donate-btn1').addEventListener('click', function(){
    const donate = getInputFieldValueById('input-donate');
    const balance = getTextFieldById('account-balance');

    if(isNaN(donate) || donate <= 0){
        my_modal_2.showModal();
        return;
    }

    if(balance<=0 || donate>balance){
        my_modal_3.showModal();
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
            <p class="font-bold text-xl text-gray-clr">${donate} Taka is Donated for Flood at Noakhali, Bangladesh. </p>
            <p class=" text-gray-clr text-opacity-70">Date: ${fullDateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);

        my_modal_1.showModal();
})

// input for 2nd donate btn
document.getElementById('donate-btn2').addEventListener('click', function(){
    const donate = getInputFieldValueById('input-donate2');
    const balance = getTextFieldById('account-balance');

    if(isNaN(donate) || donate <= 0){
        my_modal_2.showModal();
        return;
    }

    if(balance<=0 || donate>balance){
        my_modal_3.showModal();
        return;
    }

    const newBalance = balance - donate;

    const singleDonate = document.getElementById('donation2').innerText;
    const singleDonateNumber = parseFloat(singleDonate);

    const currentSingleDonate = donate + singleDonateNumber;
    document.getElementById('donation2').innerText = currentSingleDonate;
    document.getElementById('account-balance').innerText = newBalance;

    document.getElementById('no-history').classList.add('hidden');

    // getting current time and date
    const currentDate = new Date();
    const fullDateAndTime = currentDate.toString();

    // Donate History
    const div = document.createElement('div');
        div.classList.add('border-2', 'p-8', 'rounded-xl', 'mb-6');
        div.innerHTML = `
            <p class="font-bold text-xl text-gray-clr">${donate} Taka is Donated for Flood Relief in Feni, Bangladesh.</p>
            <p class=" text-gray-clr text-opacity-70">Date: ${fullDateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);

        my_modal_1.showModal();
})

// input for 3rd donate btn
document.getElementById('donate-btn3').addEventListener('click', function(){
    const donate = getInputFieldValueById('input-donate3');
    const balance = getTextFieldById('account-balance');

    if(isNaN(donate) || donate <= 0){
        my_modal_2.showModal();
        return;
    }

    if(balance<=0 || donate>balance){
        my_modal_3.showModal();
        return;
    }

    const newBalance = balance - donate;

    const singleDonate = document.getElementById('donation3').innerText;
    const singleDonateNumber = parseFloat(singleDonate);

    const currentSingleDonate = donate + singleDonateNumber;
    document.getElementById('donation3').innerText = currentSingleDonate;
    document.getElementById('account-balance').innerText = newBalance;

    document.getElementById('no-history').classList.add('hidden');

    // getting current time and date
    const currentDate = new Date();
    const fullDateAndTime = currentDate.toString();

    // Donate History
    const div = document.createElement('div');
        div.classList.add('border-2', 'p-8', 'rounded-xl', 'mb-6');
        div.innerHTML = `
            <p class="font-bold text-xl text-gray-clr">${donate} Taka is Donated for Injured in the Quota Movement-2024, Bangladesh.</p>
            <p class=" text-gray-clr text-opacity-70">Date: ${fullDateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);

        my_modal_1.showModal();
})