function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
}

function toggleButtonBackground(activeBtnId, inactiveBtnId) {
    const donationBtn = getElementById('donation-btn');
    donationBtn.style.backgroundColor = 'white';
}
