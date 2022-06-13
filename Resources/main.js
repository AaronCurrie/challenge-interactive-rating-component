//save inputs to variables
let submit = document.getElementById("submit");
let scoreDisply = document.getElementById('scored');

let main = document.getElementById('main');
let thanks = document.getElementById('thanks')

const buttons = [...document.querySelectorAll('.number')]

let scoreValue = 0

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        buttons.forEach(button => button.classList.remove('selected'));
        const clickedItem = e.target.closest('button');
        clickedItem.classList.add('selected');
        scoreValue = parseFloat(e.target.value)
        console.log(scoreValue)
    })
})

submit.addEventListener('click', (e) => {
    if(scoreValue > 0) {
        scoreDisply.innerHTML = `${scoreValue}`;
        main.classList.remove('active');
        main.classList.add('hidden');
        thanks.classList.remove('hidden');
        thanks.classList.add('active');
    }
})