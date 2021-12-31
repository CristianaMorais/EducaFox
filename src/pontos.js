window.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.protocolobj);
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
    if (localStorage.questobj == 1){
    var checkmark = document.createElement("img");
    checkmark.src = "/icons/checkmark.png";
    checkmark.height = 20;
    checkmark.width = 20;
    document.getElementById("obj3").appendChild(checkmark);
    }
    else {
    var redx = document.createElement("img");
    redx.src = "/icons/cross-red-cross.png";
    redx.height = 20;
    redx.width = 20;
    document.getElementById("obj3").appendChild(redx);
    }
    if(localStorage.duckobj == 1 && localStorage.badgerobj == 1) {
    var checkmark = document.createElement("img");
    checkmark.src = "/icons/checkmark.png";
    checkmark.height = 20;
    checkmark.width = 20;
    document.getElementById("obj2").appendChild(checkmark);
    }
    else {
    var redx = document.createElement("img");
    redx.src = "/icons/cross-red-cross.png";
    redx.height = 20;
    redx.width = 20;
    document.getElementById("obj2").appendChild(redx);
    }

    if(localStorage.protocolobj == 1) {
    var checkmark = document.createElement("img");
    checkmark.src = "/icons/checkmark.png";
    checkmark.height = 20;
    checkmark.width = 20;
    document.getElementById("obj1").appendChild(checkmark);
    }
    else {
    var redx = document.createElement("img");
    redx.src = "/icons/cross-red-cross.png";
    redx.height = 20;
    redx.width = 20;
    document.getElementById("obj1").appendChild(redx);
    }

    if(typeof localStorage.points === "undefined") localStorage.points = 0;

    if(localStorage.points < 4) {
        var counter = document.getElementById("pointcount");
        var sadFox = document.createElement("img");
        sadFox.src = "/icons/sad_fox.png";
        counter.innerHTML = 'Tens ' + localStorage.points + ' pontos ' + ' em 8';
        document.getElementById("fox").appendChild(sadFox);

    }

    if(localStorage.points > 3 && localStorage.points < 8) {
        var counter = document.getElementById("pointcount");
        var almostFox = document.createElement("img");
        almostFox.src = "/icons/almost_fox.png";
        counter.innerHTML = 'Tens ' + localStorage.points + ' pontos ' + ' em 8';
        document.getElementById("fox").appendChild(almostFox);

    }

    if(localStorage.points == 8) {
        var counter = document.getElementById("pointcount");
        var happyFox = document.createElement("img");
        happyFox.src = "/icons/happy_fox.png";
        counter.innerHTML = 'Tens ' + localStorage.points + ' pontos ' + ' em 8';
        document.getElementById("fox").appendChild(happyFox);
    }
    var resetPoints = document.getElementById('resetPoints');
    resetPoints.addEventListener("click", function () {
        localStorage.removeItem("questobj");
        localStorage.removeItem("duckobj");
        localStorage.removeItem("points");
        localStorage.removeItem("badgerobj");
        localStorage.removeItem("protocolobj")
        window.location.reload();
    });
    
});