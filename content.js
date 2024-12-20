// Listener for messages from background script
const linkedinUrlRegex = /^https?:\/\/(www\.)?linkedin\.com/;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(sender, "___SENDER_________________")
    if (message.action === 'REGISTER_URL') {
        console.log('REGISTER_URL action received in content script');
        const bodyContent = document.body.innerHTML;
        const pageUrl = window.location.href;
        sendResponse({
            content: bodyContent,
            url: pageUrl
        });
    } else if (message.action === 'GET_PAGE_INFO') {
        const bodyContent = document.body.innerHTML;
        const pageUrl = window.location.href;
        sendResponse({
            content: bodyContent,
            url: pageUrl
        });
    } else if (message.action === 'APP_ONLINE') {
        // Update UI to show app is online
        console.log('App is online...content scripts');
        // You can update the UI or show a notification here
    } else if (message.action === 'APP_OFFLINE') {
        // Update UI to show app is offline
        console.log('App is offline...content scripts');
        // You can update the UI or show a notification here
    }
});
/*
function injectCSS() {
    console.log(sender, "injectCSS_________________________-")
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('styles.css'); // Path to your CSS file
    document.head.appendChild(link);
}
*/
// Call injectCSS in your script
//injectCSS();

// content.js