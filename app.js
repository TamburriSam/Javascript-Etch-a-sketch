const playerContainer = document.querySelector('.container');
const gridBtn = document.querySelector('.gridselect')
const div = document.createElement('div');
const clrBtn = document.querySelector('.clearbtn');
const error = document.querySelector('.error');
const colorBtn = document.querySelector('.colorbtn');
const eraseBtn = document.querySelector('.erasebtn');
const scrollOne = document.querySelector('.scrollOne');
const scrollTwo = document.querySelector('.scrollTwo');




gridBtn.addEventListener('click', layoutGrid)

clrBtn.addEventListener('click', clearGame)

function createColor(something, color){
    something.style.backgroundColor = color;
}

//bottom left pixel will not light up
 function layoutGrid(number, col, row, color){
    number = prompt('Select a number less or equal to 100');
    color = prompt('Select a color')
    col = 900/number;
    row = (Math.ceil(518/number));
    playerContainer.style.gridTemplateColumns = `repeat(${number}, ${col}px)`;
    playerContainer.style.gridTemplateRows = `repeat(${number}, ${row}px)`
    playerContainer.style.backgroundColor = 'white';
    
    if(number === '' || color === ''){
        alert('Error. Nothing Selected. Please hit Clear and enter some values.')
    } else {
        console.log('ok')
    }
    gridBtn.disabled = true;

    //activate fun scroll buttons
    scrollOne.style.animationName = 'spin';
    scrollOne.style.animationDuration = '5000ms';
    scrollOne.style.animationIterationCount = 'infinite';
    scrollOne.style.animationTimingFunction = 'linear';

    scrollTwo.style.animationName = 'spin';
    scrollTwo.style.animationDuration = '5000ms';
    scrollTwo.style.animationIterationCount = 'infinite';
    scrollTwo.style.animationTimingFunction = 'linear';
    

    for(i=0; i<number; i++){
        for(j=1; j<=number; j++){
            let div1 = document.createElement('div');
            div1.classList.add('row');
            div1.style.gridRow = `${i}`
            playerContainer.appendChild(div1);

            div1.addEventListener('mouseover', function() {
                createColor(div1, `${color}`);

                colorBtn.addEventListener('click', function(){
                    color = `${'#'+Math.floor(Math.random()*16777215).toString(16)}`;
                })

                eraseBtn.addEventListener('click', function(){
                    color = `white`;
                })
            })
        }
    }

} 

//etch a sketch 2021?? like a modern etch a sketch instead of going classic. 


function clearGame(){
 location.reload()
}


