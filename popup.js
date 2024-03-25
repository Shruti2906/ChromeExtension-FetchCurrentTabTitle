const btn = document.querySelector('.fetchTitleBtn');
const fetchedTitleTxt = document.querySelector('.fetchedTitleTxt');

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fetchTitle,
    }, (result) => { 
        const [data] = result;
        if(data.result){
            let title = data.result;
            fetchedTitleTxt.innerHTML = `<h2>${title}</h2>`;
        }
    });
})

function fetchTitle() {
    try {
        //fetcher 
        const title = document.title;
        return document.title;
    } catch (err) {
        console.log(err);
    }
}