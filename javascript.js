let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards=[firstCard, secondCard]
let sum = firstCard + secondCard
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let hasBlackjack=0
let isAlive=1
let msgEl=document.getElementById("msg")
function getRandomNumber(){ 
    let randomNumber=Math.floor(Math.random() * 13) + 1
    return randomNumber
}
let 

function startGame(){
    cardEl.textContent = "Cards : "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+ " "
    }
    sumEl.textContent= "Sum : "+ sum
    if(sum<=20){
        message= "Do you want to draw new card ? " 
     }
    else if(sum===21){
       message= "You've got Blackjack"   
        hasBlackjack=1
        }
    else {
        message = "You're out of game!!!"
        isAlive=0
    }
    msg.innerText=message
}

function newCard(){
    if(hasBlackjack===0 && isAlive===1){
        
    let card=getRandomNumber()
    sum+=card
    cards.push(card)
    startGame()
    
    }
}
function restartGame(){
    firstCard = getRandomNumber()
    secondCard = getRandomNumber()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack=0
    isAlive=1
    startGame()
}
