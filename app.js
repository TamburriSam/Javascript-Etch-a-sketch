const playerContainer = document.querySelector('.container');
const gridBtn = document.querySelector('.gridselect')
const div = document.createElement('div');
const clrBtn = document.querySelector('.clearbtn');
const error = document.querySelector('.error');


gridBtn.addEventListener('click', layoutGrid)

clrBtn.addEventListener('click', clearGame)

function createColor(something, color){
    something.style.backgroundColor = color;
}

//bottom left pixel will not light up
 function layoutGrid(number, col, row, color){
    number = prompt('Select a number less or equal to 100');
    color = prompt('Select a color')
    col = 960/number;
    row = (Math.ceil(512/number));
    playerContainer.style.gridTemplateColumns = `repeat(${number}, ${col}px)`;
    playerContainer.style.gridTemplateRows = `repeat(${number}, ${row}px)`
    playerContainer.style.backgroundColor = 'green';
    // make the error its own function and put here
    if(number === '' || color === ''){
        let newText = document.createTextNode('Error');
        playerContainer.appendChild(newText);
        //stuck right here in error messages
        newText.classList.add('error')
        console.log('error')
    } else {
        console.log('ok')
    }
    gridBtn.disabled = true;

    for(i=0; i<number; i++){
        for(j=1; j<=number; j++){
            let div1 = document.createElement('div');
            div1.classList.add('row');
            div1.style.gridRow = `${i}`
            playerContainer.appendChild(div1);

            div1.addEventListener('mouseover', function() {
                createColor(div1, `${color}`)
            })
        }
    }
} 


function clearGame(){
 location.reload()
}


