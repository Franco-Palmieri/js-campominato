
//NUMERI COMPUTER
var randomNums = [];

while (randomNums.length < 16){ //16 numeri
    var num = Math.floor(Math.random()* 100 + 1); //numero random da 1 a 100
    if (num !== randomNums){ //se il numero non è presente nell'array viene pushato
        randomNums.push(num);
    }
}
console.log(randomNums);
//NUMERI UTENTE
var userNums = [];

while (userNums.length < 84) {

    var userNum = prompt("inserisci un numero");
    if (userNum === randomNums){
        alert("the end")
    }else {
        userNums.push(userNum);
    }
}
console.log(userNums);
var result = userNums.length;
document.getElementById("score").innerHTML = result;