chrome.storage.sync.get(["active"], (res) => {
    if(res.active) {
        document.body.onload = () => {
            //Scan if text of h2 tags contains 'Ähnliche Fragen'
            var h2tags = document.getElementsByTagName("h2");
        
            Array.from(h2tags).forEach((el) => {
                if(el.innerText.includes("Ähnliche Fragen")) {
                    //Check if previous element in html structure has 'hlcw0c' class (larger free space after it)
                    
                    var questionBox = el.parentElement.parentElement.parentElement.parentElement.parentElement;
                    var previousElement = questionBox.previousElementSibling;
        
                    if(previousElement && previousElement.classList.contains("hlcw0c")) {
                        previousElement.classList.remove("hlcw0c");
                    }
                    
                    questionBox.remove();
                }
            });
        }
    }
});