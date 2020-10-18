$(function(){
    $("#accept-button").click(function(){
        //let urlLink = $("#urlLink")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            var urlLink= "https://www.linkedin.com/mynetwork/";
            var tabsArray = tabs[0];
            chrome.tabs.sendMessage(tabsArray.id,{todo:"acceptAllRequests", urlLink: urlLink});
            close();
        })
    })
    // chrome.storage.sync.get('username', function(Greeting){
    //     if(Greeting.username) {
    //         $('#name').html(Greeting.username)
    //     }
    // })

    // $("#input").keyup(function(){
    //     $("#name").html($("#input").val())
    // });

    // $("#button").click(function(){
    //     let username = $("#input").val();

    //     chrome.storage.sync.set({username:username}, function(){})
    //         close()
    // })
})