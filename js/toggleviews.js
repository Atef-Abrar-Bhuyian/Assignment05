document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-container');    
})

document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-container');
    toggleButtonBackground('history-btn', 'donation-btn');
})




