var count=0;
g1=0;
function goalkeeper()
{
    b=document.getElementById('b2')
    g = Math.floor(Math.random() *7);
    g1 = g;
    if(g==1)
        b.style.animation="gl0 1s";
    else if (g==2)
        b.style.animation="gl1 1s";
    else if (g==3)
        b.style.animation="gl2 1s";
    else if (g==4)
        b.style.animation="gc1 1s";
    else if (g==5)
        b.style.animation="gr0 1s";
    else if (g==6)
        b.style.animation="gr1 1s";
    else if (g==7)
        b.style.animation="gr2 1s";
}
function goal()
{
    document.getElementById('GoalDone1').innerHTML="LOL";
    document.getElementById('GoalDone2').innerHTML="LOL";
    o= Math.floor(Math.random()*5);
    if(o==1)
        document.getElementById('b1').style.animation="Outside1 1s";
    else if(o==2)
        document.getElementById('b1').style.animation="Outside2 1s";
    else if(o==3)
        document.getElementById('b1').style.animation="Outside3 1s";
    else if(o==4)
        document.getElementById('b1').style.animation="Outside4 1s";
    else if(o==5)
        document.getElementById('b1').style.animation="Outside5  1s";
}
function LeftTop()
{
    document.getElementById('b1').style.animation="left0 1s";
    goalkeeper();
    if(g1!=1)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function RightTop()
{
    document.getElementById('b1').style.animation="Right0 1s";
    goalkeeper();
    if(g1!=5)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function CenterTop()
{
    document.getElementById('b1').style.animation="center0 1s";
    goalkeeper();
    if(g1!=4)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function LeftMiddle()
{
    document.getElementById('b1').style.animation="left2 1s";
    goalkeeper();
    if(g1!=2)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function RightMiddle()
{
    document.getElementById('b1').style.animation="Right2 1s";
    goalkeeper();
    if(g1!=6)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function CenterMiddle ()
{
    document.getElementById('b1').style.animation="center2 1s";
    goalkeeper();
    if(g1!=4)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function leftBottem()
{
    document.getElementById('b1').style.animation="left1 1s";
    goalkeeper();
    if(g1!=3)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function RightBottem()
{
    document.getElementById('b1').style.animation="Right1 1s";
    goalkeeper();
    if(g1!=7)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}
function CenterBottem()
{
    document.getElementById('b1').style.animation="center1 1s";
    goalkeeper();
    if(g1!=4)
    {
        count++;
        document.getElementById('Score').innerHTML=count;
        document.getElementById('GoalDone1').innerHTML="Goal!";
        document.getElementById('GoalDone2').innerHTML="Goal!";
    }
    else
    {
        document.getElementById('GoalDone1').innerHTML="Saved!";
        document.getElementById('GoalDone2').innerHTML="Saved!"; 
    }
}