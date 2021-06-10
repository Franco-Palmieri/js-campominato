
var randomNums = [];
while (randomNums.length < 16){
    var num = Math.floor(Math.random()* 100 + 1);
    if (num !== randomNums){
        randomNums.push(num);
    }
}
console.log(randomNums);