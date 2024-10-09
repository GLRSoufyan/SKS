
function KnopKlik(link){
    let knop = document.getElementById("knop0");
    knop.src = "assets/images/Button_1_Pressed.png";
    setTimeout(GotoLink(knop), 300);
}

function GotoLink(knop){
    //knop.src = "assets/images/Button_1.png";
    window.location.replace("pages/History.html");
}