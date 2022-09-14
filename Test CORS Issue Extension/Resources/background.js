chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello"){
        fetch("https://example.com")
        .then(response=>{
            console.log("Success 1", response)
        })
        .catch(error=>{
            console.log("Fail 1", error)
        })
        sendResponse({ farewell: "goodbye" });
    }
});

chrome.action.onClicked.addListener(()=>{
    
    fetch("https://example.com")
    .then(response=>{
        console.log("Success 2", response)
    })
    .catch(error=>{
        console.log("Fail 2", error)
    })
    
})
