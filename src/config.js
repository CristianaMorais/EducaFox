window.addEventListener("load", () => {
    var r = document.querySelector(':root');
    if (localStorage.colorConfig) {
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
    colorButton.addEventListener("click", function() {
        localStorage.colorConfig = document.getElementById('colorChoice').value;
        console.log(localStorage.colorConfig);
        r.style.setProperty('--color',localStorage.colorConfig);                     
    });
    fontButton.addEventListener("click", function() {
        localStorage.titleF = document.getElementById('titleFont').value;
        localStorage.subtitleF = document.getElementById('subtitleFont').value;
        localStorage.buttonTextF = document.getElementById('buttonTextFont').value;
        localStorage.textF = document.getElementById('textFont').value;
        r.style.setProperty('--titleFont',localStorage.titleF);
        r.style.setProperty('--subTitleFont',localStorage.subtitleF);
        r.style.setProperty('--buttonTextFont',localStorage.buttonTextF);
        r.style.setProperty('--textFont',localStorage.textF);        
    });
    resetButton.addEventListener("click", function() {
        localStorage.removeItem('colorConfig');
        localStorage.removeItem('titleF');
        localStorage.removeItem('subtitleF');
        localStorage.removeItem('buttonTextF');
        localStorage.removeItem('textF');
        window.location.reload();

    });
});