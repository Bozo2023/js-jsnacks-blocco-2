let array=[]
let sum=0;
while(sum<50){
    let num=parseInt(prompt("entra un numero:"));
    array.push(num);
    sum+=num;
}
document.writeln(`i numeri inseriti sono: ${array}`)