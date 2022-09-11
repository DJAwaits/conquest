// values of inventory
let foodAmount = 0;
let goldAmount = 0;
let woodAmount = 0;
// connection to html

const farmButton = document.getElementById('farmButton');
const mineButton = documet.getElementById('mineButton');
const chopButton = document.getElementById('chopButton');

const foodCount = document.getElementById('foodCount');
const goldCount = document.getElementById('goldCount');
const woodCount = document.getElementById('woodCount');

// functions
farmButton.addEventListener('click', function(){
    foodAmount += 1;
    foodCount.innerHTML = `Food: ${foodAmount}`;
    console.log(foodAmount);
})

mineButton.addEventListener('click', function(){
    goldAmount += 1;
    goldCount.innerHTML = `Gold:  ${goldAmount}`;
    console.log(goldAmount);
})