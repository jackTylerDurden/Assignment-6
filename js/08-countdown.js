while(true){
    var userInput = parseInt(window.prompt("Please enter a number to countdown"),10);
    if(userInput <= 0)
        window.alert("Please enter a nonzero and positive number");
    else
        break;
}

for(var i=userInput; i>=0 ;i--){
    document.write(i+" <br>");
}    