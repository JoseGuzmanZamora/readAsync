var fs = require('fs')
//Read file function
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString();
    lines(textPlain);
};

function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback );
}

function lines(text){
    var contador = 1 
    var espacio = '\n'
    var lineas = text.split('\n')
    for(var j = 0; j < lineas.length; j++){
        for(var i = 0; i < lineas[j].length; i++){
            if(lineas[j][i] == " ")
            contador += 1;
        }
        console.log(lineas[j]);
        console.log(contador);
        fs.appendFileSync("./fileTest", (espacio.concat(contador.toString())));
        contador = 1 ;
    }
}

readFile()