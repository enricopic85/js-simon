
function noRepeatNumber(min,max){
    const numbers=[];
    while (numbers.length < 5) {
        const random=Math.floor( Math.random() * (max-min) + min);
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}
let randomNumber=noRepeatNumber(1,999);
let number=document.getElementById("number");
let count=0;
let userNumber;
let howMany=0;
let whichNumber=[];
for(i=0; i < randomNumber.length;i++){
    let box=document.createElement('div');
    box.classList.add('box');
    number.append(box);
    box.innerHTML=randomNumber[i];
}

let clock=setTimeout(function(){
   number.innerHTML='';
   setTimeout(function(){
    while (count < 5) {
        userNumber=parseInt(prompt("inserisci i numeri che hai appena visto"));
        if (isNaN(userNumber)) {
            alert("devi inserire dei numeri!");
            count--;
        }
         if (randomNumber.includes(userNumber)) {
             whichNumber.push(userNumber);
             howMany++;
         }
         count++;
    }
    alert(`hai totalizzato ${howMany} ed hai indovinato i numeri: ${whichNumber}`)
   },1000)
},5000);

