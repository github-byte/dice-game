
var m=Math.floor((Math.random()*6)+1);
var n=Math.floor((Math.random()*6)+1);

document.querySelector("img.img1").src=("images/dice"+m+".png");
document.querySelector("img.img2").src=("images/dice"+n+".png");

if(m>n)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(m===n)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}














// switch(m)
// {
//     case 1:
//         document.getElementsByClassName('img1').src="images/dice1.png";
//         break;
//         case 2:
//         document.getElementsByClassName('img1').src="images/dice2.png";
//         break;
//         case 3:
//         document.getElementsByClassName('img1').src="images/dice3.png";
//         break;
//         case 4:
//         document.getElementsByClassName('img1').src="images/dice4.png";
//         break;
//         case 5:
//         document.getElementsByClassName('img1').src="images/dice5.png";
//         break;
//         default:
//         document.getElementsByClassName('img1').src="images/dice6.png";
//         break;

// }