var Tabclicked = false;
disableBrowserAction();


function disableBrowserAction() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['jquery.js'] }, function() {
            chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['CloseRuler.js'] });
        });
    });

}

function enableBrowserAction() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['jquery.js'] }, function() {
            chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['Ruler.js'] });
        });
    });
}

function updateState() {
    if (Tabclicked == false) {
        Tabclicked = true;
        enableBrowserAction();
    } else {
        Tabclicked = false;
        disableBrowserAction();
    }
}

chrome.action.onClicked.addListener(function(tabId) {
    updateState(tabId);
});