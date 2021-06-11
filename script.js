
//RIFINITURA CODICE PUSHATO 11/06/2021

//NUMERI COMPUTER
function isInArray(array, element) {
    // verifico con un for se l'elemento inserito come argomento
    // è uguale al singolo item che sto analizzando dell'array durante in ciclo
    // (in posizione x)
    for (var x = 0; x < array.length; x++) {
        if (element === array[x]) {
            return true;
        }
    }
    return false;
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var randomNums = [];
var score = document.getElementById("score");
 
while (randomNums.length < 16){ //16 numeri
    var num = getRandomNum(1, 100);
    if (!isInArray(randomNums, num)){ //se il numero non è presente nell'array viene pushato
        randomNums.push(num);
    }        
}
console.log(randomNums);

//NUMERI UTENTE

var userNums = [];
var gameOver = false;

while(userNums.length < 84){
    var userNum = parseInt(prompt("inserisci un numero da 1 a 100"));
    if(!isInArray(userNums, userNum)){ //se il numero inserito non è nell'array continua.
        
        if(isInArray(randomNums, userNum)){
            alert("Fine dei Giochi")
            gameOver = true;
            break;
        }else{
            userNums.push(userNum);
        }
        
    }else{
        alert("il numero è gia stato inserito!!!")
    }
}
var result = userNums.length;
if (!gameOver){ //se esce dal ciclo e gameover non è false vince.
    score.innerHTML = "HAI VINTO, IL TUO PUNTEGGIO è DI: " + " " + result;
}else{
    score.innerHTML = "HAI PERSO CON UN PUNTEGGIO DI: " + " " + result;
}


