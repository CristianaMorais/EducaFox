window.addEventListener("load", () => {
    var r = document.querySelector(':root');
    if(localStorage.colorConfig){
    console.log(localStorage.colorConfig);
    r.style.setProperty('--color',localStorage.colorConfig);
    }
    if(localStorage.titleF){
        r.style.setProperty('--titleFont',localStorage.titleF);
    }
    if(localStorage.subtitleF){
        r.style.setProperty('--subTitleFont',localStorage.subtitleF);
    }
    if(localStorage.buttonTextF){
        r.style.setProperty('--buttonTextFont',localStorage.buttonTextF);
    }
    if(localStorage.textF){
        r.style.setProperty('--textFont',localStorage.textF);  
    }               
});