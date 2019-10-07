var coinFlip;
var coinFlipResult;
var counter=0;

do{
    coinFlip = Math.round(Math.random());    
    if(coinFlip == 0)
        coinFlipResult = "Heads";
    else if(coinFlip == 1)
        coinFlipResult = "Tails";
    console.log(coinFlipResult);
}while(coinFlipResult != 'Tails');