const pijlR = document.getElementById("pijlR");
const pijlL = document.getElementById("pijlL");

pijlL.style.visibility = 'hidden';

let hasclicked = false;
let amountScrolled = 0;

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

                if(amountScrolled > 0){
                    amountScrolled--;
                }
                break;
            case "R":
                container.scrollLeft += scrollamount;

                if(amountScrolled < 4){
                    amountScrolled++;
                }
                break;
        }
        if(amountScrolled == 0){
            pijlL.style.visibility = 'hidden';
            pijlR.style.visibility = 'visible';
        }
        else if(amountScrolled == 4){
            pijlR.style.visibility = 'hidden';
            pijlL.style.visibility = 'visible';
        }
        else{
            pijlR.style.visibility = 'visible';
            pijlL.style.visibility = 'visible';
        }
    }
    else{
        setTimeout(function(){hasclicked = false;}, 40);
    }
}