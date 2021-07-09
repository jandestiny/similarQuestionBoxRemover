chrome.storage.sync.get(["active"], (res) => {
    if (res.active) {
        document.body.onload = () => {
            let box = document.querySelector(".related-question-pair")

            if (box)
            {
                for (let i = 0; i < 5; i++)
                {
                    box = box.parentElement
                }

                box.innerHTML = ""
            } 
        }
    }
});