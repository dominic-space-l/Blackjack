currentCard = 0
let sum = 0
let isDisabled = false

let thePrompt = document.getElementById("prompt")
let theCards = document.getElementById("cards")
let theSum = document.getElementById("sum")
function startGame() {
    isDisabled = false
    checkCondition()

    thePrompt.textContent = "Lets play!"
    theCards.textContent = "Cards: "
    theSum.textContent = "Sum: "
    sum = 0
}

function checkCondition() {
    if(isDisabled === false) {
        document.getElementById("draw").disabled = false
    } else {
        document.getElementById("draw").disabled = true
    }
}

function getCard() {
    currentCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    theCards.textContent += (currentCard + " ")

    console.log(sum)
    sum += currentCard
    console.log(sum)
    theSum.textContent = sum

    if(sum < 21) {
        //prompt: get another card?
        thePrompt.textContent = "Get another card?"
    } else if(sum === 21) {
        //prompt: you got a blackjack
        thePrompt.textContent = "You got a blackjack!"
        sum = 0
        isDisabled = true
        checkCondition()
    } else {
        //prompt: you lost
        thePrompt.textContent = "You lost."
        sum = 0
        isDisabled = true
        checkCondition()
    }

}