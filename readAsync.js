var fs = require('fs')
var contador = 0
//Read file function
function readFile(){
    var buffer = fs.readFile("./fileTest") 
    var textPlain = buffer.toString()
    var myArray = textPlain.split("\n")
    myArray.forEach(function(value){
        contador += 1 
        console.log(value);
        console.log(contador);
    });
}
readFile()