// values of inventory
let foodAmount = 0;
let goldAmount = 0;
let woodAmount = 0;
let fishAmount = 0;
let fishIncrement = 1;
// connection to html

const farmButton = document.getElementById('farmButton');
const mineButton = documet.getElementById('mineButton');
const chopButton = document.getElementById('chopButton');

const foodCount = document.getElementById('foodCount');
const goldCount = document.getElementById('goldCount');
const woodCount = document.getElementById('woodCount');

const fishButton = document.getElementById('fishButton');
const fishCount = document.getElementById('fish');

// functions
fishButton.addEventListener('click', function(){
    fishAmount += fishIncrement;
    fish.innerHTML = `Fish: ${fishAmount}`;
    if (fishAmount > 0) {
        fish.classList.remove('hidden');
    }
})

farmButton.addEventListener('click', function(){
    foodAmount += 1;
    foodCount.innerHTML = `Food: ${foodAmount}`;
})

mineButton.addEventListener('click', function(){
    goldAmount += 1;
    goldCount.innerHTML = `Gold: ${goldAmount}`;
})