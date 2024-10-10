
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
    const container = document.getElementById("scroll-container");
    const scrollamount = 1880;
    switch(dir){
        case "L":
            container.scrollLeft -= 1900;
            break;
        case "R":
            container.scrollLeft += 1900;
            break;
    }
}