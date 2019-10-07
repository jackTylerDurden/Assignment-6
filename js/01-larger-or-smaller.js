var number1;
var number2;

while(true){
    number1 = parseInt(window.prompt("Please enter number 1"),10);    
    if(isNaN(number1)){
        window.alert("Please enter a valid number");
    }else{
        break;
    }
}
while(true){
    number2 = parseInt(window.prompt("Please enter number 2"),10);
    if(isNaN(number2)){
        window.alert("Please enter a valid number");
    }else{
        break;
    }
}
if(number1 == number2){
    window.document.write("Both numbers are equal");
}else if(number1 > number2){
    window.document.write("The larger number is "+number1);
}else{
    window.document.write("The larger number is "+number2);
}