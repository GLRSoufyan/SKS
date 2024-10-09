
function KnopKlik(id, link, index){
    let knop;
    switch(index){
        case 0:
            knop = document.getElementById(id);
            knop.src = "assets/images/Button_1_Pressed.png";
        case 1:
            knop = document.getElementsByClassName("backhome");
    }
    setTimeout(GotoLink(link), 3000);
}

function GotoLink(link){
    window.location.href = link;
}

function Moveslide(dir){
    console.log(dir);

    
}