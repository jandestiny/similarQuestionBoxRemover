const span = document.getElementById('span');

function enabledOrDisabled(element) {

  chrome.storage.sync.get(["active"], (activityStatus) => {
    if(activityStatus.active) {

      Array.from(element.classList).forEach((cl) => {
        element.classList.remove(cl);
      });

      element.innerText = "invisible!";
      element.classList.add("green");

    } else {

      Array.from(element.classList).forEach((cl) => {
        element.classList.remove(cl);
      });
      
      element.innerText = "visible.";
      element.classList.add("red");

    }
  });
}

function enableBoxBlocking() {
  console.log("eBB");
  chrome.storage.sync.set({"active": true});
  console.log("sq-box-blocking activated.");
  enabledOrDisabled(span);
}

function disableBoxBlocking() {
  console.log("dBB");
  chrome.storage.sync.set({"active": false});
  console.log("sq-box-blocking deactivated.");
  enabledOrDisabled(span);
}

function buttonClickEvent(event) {
  console.log("func b click ev");

  chrome.storage.sync.get(["active"], (activityStatus) => {
    console.log(activityStatus.active);
    if(activityStatus.active) {

      disableBoxBlocking();

    } else {

      enableBoxBlocking();

    }
  });
}

enabledOrDisabled(span);

document.getElementById("button").addEventListener("click", (e) => {
  console.log("butt click event");
  buttonClickEvent(e.target);
});