'use strict';

function BinarioADecimal(num) 
{
num = num.split('') 

var suma = 0;

for (var i = 0; i < num.length;i++)
{
suma = suma + Math.pow(2,num.length-1-i) * num[i]
} 
return suma
};

function DecimalABinario(num) 
{
var binario = []
while(num !==0){
binario.unshift(num % 2)
num = Math.floor (num / 2)
}
return binario.join('')
};

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
