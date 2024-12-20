// Function to close the popup window
document.getElementById('closePopupBtn').addEventListener('click', function() {
    window.close(); // This will close the popup window
});
document.getElementById('sendRegisterUrl').addEventListener('click', function() {


    chrome.runtime.sendMessage({ action: 'sendMessage', message: 'POP_REGISTER_URL' }, function(response) {
        console.log(response.status);
    });
});