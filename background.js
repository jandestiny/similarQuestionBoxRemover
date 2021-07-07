chrome.runtime.onInstalled.addListener(() => {
  //WIEDER ENTFERNEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // chrome.storage.sync.clear();

  chrome.storage.sync.get(["active"], (res) => {
    console.log("active res:" + res.active);

    if(res.active === undefined) {
      chrome.storage.sync.set({"active": true}, (val) => {
        console.log("val set to: " + val);
      });
      console.log("Box blocking has been activated.")
    }
  });
});

// chrome.runtime.onStartup.addListener(() => {
//   chrome.storage.sync.get("active", (res) => {
//     if(res == null) {
//       chrome.storage.sync.set({"active": true});
//       console.log("Box blocking has been activated.")
//     }
//   });
// });