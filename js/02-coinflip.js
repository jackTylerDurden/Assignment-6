var coinFlip = Math.round(Math.random() * 10);
var choice;
var winningFactor = 5; // certain number
var finalResult;
var finalResultBooleanVal;

while(true){
    choice = window.prompt("Please enter heads or tails").toLowerCase();
    if(choice == 'heads' || choice == 'tails')
        break;
    else
        alert("Please enter a valid choice");
}

//If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
if(coinFlip < winningFactor){
    finalResult = 'heads';
}else if(coinFlip > winningFactor){
    finalResult = 'tails';
}

if(choice == finalResult){
    window.alert("The flip was "+finalResult+" and you chose "+choice+"...you win!");
}else{
    window.alert("The flip was "+finalResult+" and you chose "+choice+"...you lose!");
}

/*
//If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
if(coinFlip < winningFactor){
    //coin flip is heads
    finalResultBooleanVal = true;
}else if(coinFlip > winningFactor){
    //coin flip is tails
    finalResultBooleanVal = false;
}

//8th Point of the assignment - checking for boolean result
if(choice == 'heads' && finalResultBooleanVal == true){ 
    window.alert("The flip was Heads and you chose "+choice+"...you win!");
}else if(choice == 'tails' && finalResultBooleanVal == true){
    window.alert("The flip was Heads and you chose "+choice+"...you lose!");
}else if(choice == 'heads' && finalResultBooleanVal == false){
    window.alert("The flip was Tails and you chose "+choice+"...you lose!");
}else if(choice == 'tails' && finalResultBooleanVal == false){
    window.alert("The flip was Tails and you chose "+choice+"...you win!");
}
*/