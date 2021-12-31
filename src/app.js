window.addEventListener("load", () => {
    if(location.protocol == 'https:') {
        localStorage.protocolobj = 0;
        if(localStorage.protocolobj != 1){
            console.log("ola");
            localStorage.protocolobj = 1;
            console.log(localStorage.protocolobj);
            if(typeof localStorage.points === "undefined") {
                localStorage.points = 0;
            }
            localStorage.points = parseInt(localStorage.points) + 1;
            console.log(localStorage.points);
        }
    }
});

window.addEventListener("DOMContentLoaded", () => {
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
    var on_off = document.getElementById('on_off');
    on_off.addEventListener("click", function() {
        var btn = document.getElementById("on_off");
        if (btn.value == "Ligado") {
            btn.value = "Desligado";
            btn.innerHTML = "Desligado";
        }
        else {
            btn.value = "Ligado";
            btn.innerHTML = "Ligado";
        }        
    });             
});