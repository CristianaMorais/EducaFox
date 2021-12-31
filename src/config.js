window.addEventListener("DOMContentLoaded", () => {
    //Initial configuration
    var r = document.querySelector(':root');
    if (localStorage.bodyColor) {
        r.style.setProperty('--bodyColor',localStorage.bodyColor);
    }
    if (localStorage.titleColor) {
        r.style.setProperty('--titleColor',localStorage.titleColor);
    }
    if (localStorage.subtitleColor) {
        r.style.setProperty('--subtitleColor',localStorage.subtitleColor);
    }
    if (localStorage.buttonColor) {
        r.style.setProperty('--buttonColor',localStorage.buttonColor);
    }
    if (localStorage.buttonBColor) {
        r.style.setProperty('--buttonBColor',localStorage.buttonBColor);
    }
    if(localStorage.textColor) {
        r.style.setProperty('--textColor',localStorage.textColor);
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

    //Buttons for configurations
    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener("click", function() {
        localStorage.bodyColor = document.getElementById('bodyColor').value;
        localStorage.titleColor = document.getElementById('titleColor').value;
        localStorage.textColor = document.getElementById('textColor').value;
        localStorage.subtitleColor = document.getElementById('subtitleColor').value;
        localStorage.buttonColor = document.getElementById('buttonColor').value;
        localStorage.buttonBColor = document.getElementById('buttonBColor').value;
        r.style.setProperty('--bodyColor',localStorage.bodyColor);
        r.style.setProperty('--titleColor',localStorage.titleColor);  
        r.style.setProperty('--subtitleColor',localStorage.subtitleColor);
        r.style.setProperty('--textColor',localStorage.textColor);  
        r.style.setProperty('--buttonColor',localStorage.buttonColor);  
        r.style.setProperty('--buttonBColor',localStorage.buttonBColor);                       
    });
    var fontButton = document.getElementById('fontButton');
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
    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener("click", function() {
        localStorage.removeItem('bodyColor');
        localStorage.removeItem('titleColor');
        localStorage.removeItem('subtitleColor');
        localStorage.removeItem('textColor');
        localStorage.removeItem('buttonColor');
        localStorage.removeItem('buttonBColor');
        localStorage.removeItem('titleF');
        localStorage.removeItem('subtitleF');
        localStorage.removeItem('buttonTextF');
        localStorage.removeItem('textF');
        window.location.reload();

    });
});