// ID of the current active tab
var currId;

// ID of the facebook tab we create
var fbId;

chrome.idle.setDetectionInterval(20); // Check every four minutes
chrome.idle.onStateChanged.addListener(function(newState) {
  if(newState === "idle") {

      // Save current tab ID
      chrome.tabs.query(
        {currentWindow: true, active : true},
        function(tab){currId = tab[0].id;
          console.log(tab[0].id)});

      // Open teapot facebook
      chrome.tabs.create({
          'url': 'https://www.facebook.com/?ref=iamteapot',
      }, function(tab) {
        fbId = tab.id;
      });
  }
});

// When posting is done, wait 5 seconds, close tab and return to previously open tab
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {

      setTimeout(function(){
        chrome.tabs.remove(fbId)
        chrome.tabs.update(currId, {active:true});
      }, 5000);
    }
      
  });

       
      




