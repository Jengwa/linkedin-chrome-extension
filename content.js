
chrome.runtime.sendMessage({todo:"showPageAction"});


chrome.storage.sync.get("urlLink", function(acceptAllRequests){
    if(acceptAllRequests.urlLink) {
        $('invitation-card__action-container pl3')
        for (let i=0 ; i<x.length; i++) x[i].click();
    } else {
        alert('no friend request');
    }
})

chrome.storage.onChanged.addListener(function(request,sender,sendMessage){
    if(request.todo=="acceptAllRequests") {
        let actionToDone = request.urlLink;
        let action = actionToDone;
        chrome.storage.sync.set({urlLink:action}, function(){});
    }
})

