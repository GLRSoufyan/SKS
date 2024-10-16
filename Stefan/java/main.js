
let hasclicked = false;

function KnopKlik(id, link, index){
    let knop;
    switch(index){
        case 0:
            knop = document.getElementById(id);
            document.getElementById(id).setAttribute('src', 'assets/images/knoppen/Button_1_Pressed.png');
            break;
        case 1:
            knop = document.getElementsByClassName("backhome");
            break;
    }
    setTimeout(function(){GotoLink(link);}, 100);
}

function GotoLink(link){
    window.location.href = link;
}

function Moveslide(dir){
    const container = document.getElementById("scroll-container");
    const scrollamount = 2030;
    if(!hasclicked){
        hasclicked = true;
        switch(dir){
            case "L":
                container.scrollLeft -= scrollamount;
                break;
            case "R":
                container.scrollLeft += scrollamount;
                break;
        }
    }
    else{
        setTimeout(function(){hasclicked = false;}, 40);
    }
}