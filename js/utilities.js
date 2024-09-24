// toggle for donate and history button
function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    
    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
    
}

// toggle background color
function showActiveBtn(id){
    document.getElementById('donation-btn').style.backgroundColor = "white";
    document.getElementById('donation-btn').style.color = "#36013F";
    document.getElementById('history-btn').style.backgroundColor = "white";
    document.getElementById('history-btn').style.color = "#36013F";
    document.getElementById(id).style.backgroundColor ="#36013F";
    document.getElementById(id).style.color ="white";
}

// to get the value from input
function getInputFieldValueById (id){
    const donate = document.getElementById(id).value;
    const donateNumber = parseFloat(donate);
    return donateNumber;
}

// to get the main balance 
function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


