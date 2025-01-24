var list = document.querySelectorAll("img");

const first = Math.floor(Math.random() * 6 )+1;
const imageFirst='assets/dice'+first+'.png';
list[0].setAttribute('src',imageFirst);

const second = Math.floor(Math.random() * 6 )+1;
const imageSecond='assets/dice'+second+'.png';
list[1].setAttribute('src',imageSecond);

if(first>second)
{
    document.querySelector('h1').innerHTML="The Winner is User 1"; 
}
else if(first<second)
{
    document.querySelector('h1').innerHTML="The Winner is User 2"; 
}
else{
    document.querySelector('h1').innerHTML="It is a Draw/Tie"; 

}