let firstCard = 6
let secondCard = 9
let cards=[firstCard, secondCard]
let sum = firstCard + secondCard
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")

let msgEl=document.getElementById("msg")


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
    }
    else {
        message = "You're out of game!!!"
    }
    msg.innerText=message
}

function newCard(){
    let card=7
    sum+=card
    cards.push(card)
    startGame()
    console.log(cards)

}
