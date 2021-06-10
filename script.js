
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
var randomNums = [];
 
while (randomNums.length < 16){ //16 numeri
    var num = Math.floor(Math.random()* 100 + 1); //numero random da 1 a 100
    if (isInArray(randomNums, num)){ //se il numero non è presente nell'array viene pushato

    }else{
        randomNums.push(num);
    }
}
console.log(randomNums);
