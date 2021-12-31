window.addEventListener("DOMContentLoaded", () => {
    //Initial configuration
    var r = document.querySelector(':root');
    var b = document.querySelector('#botoes');
    var m = document.querySelector('#mensagem');

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
    //On_Off button
    var on_off = document.getElementById('on_off');
    on_off.addEventListener("click", function() {
        var btn = document.getElementById("on_off");
        var botoes = document.getElementById("botoes");
        var msg = document.getElementById("mensagem");
        

        if (btn.value == "Ligado") {
            btn.value = "Desligado";
            btn.innerHTML = "Ligar";
            botoes.style.display = "none";
            msg.style.display = "block";
            localStorage.botao = document.getElementById("on_off").value;
            
        }
        else{
            btn.value = "Ligado";
            btn.innerHTML = "Desligar";
            botoes.style.display = "block";
            msg.style.display = "none";
            localStorage.botao = document.getElementById("on_off").value;            
        }        
    });
    
    if(localStorage.botao == "Ligado"){
        b.style.setProperty("display", "block");
        m.style.setProperty("display", "none");
        document.getElementById("on_off").value = "Ligado";
        document.getElementById("on_off").innerHTML = "Desligar";
    }

    if(localStorage.botao == "Desligado"){
        b.style.setProperty("display", "none");
        m.style.setProperty("display", "block");
        document.getElementById("on_off").value = "Desligado";
        document.getElementById("on_off").innerHTML = "Ligar";
    } 
});