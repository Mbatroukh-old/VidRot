chrome.tabs.executeScript({
  code: '$(".trigger").click(function() { console.log("Message from background script."); });'
});