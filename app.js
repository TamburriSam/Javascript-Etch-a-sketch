const playerContainer = document.querySelector('.container');
const gridBtn = document.querySelector('.gridselect')
const div = document.createElement('div');
const clrBtn = document.querySelector('.clearbtn')


gridBtn.addEventListener('click', layoutGrid)

clrBtn.addEventListener('click', clearGame)

function createColor(something, color){
    something.style.backgroundColor = color;
}


 function layoutGrid(number, col, row, color){
    number = prompt('Select a number less or equal to 100');
    color = prompt('Select a color')
    col = 960/number;
    row = (Math.ceil(512/number));
    playerContainer.style.gridTemplateColumns = `repeat(${number}, ${col}px)`;
    playerContainer.style.gridTemplateRows = `repeat(${number}, ${row}px)`
    playerContainer.style.backgroundColor = 'magenta';
    gridBtn.disabled = true;

    for(i=0; i<number; i++){
        for(j=1; j<=number; j++){
            let div1 = document.createElement('div');
            div1.classList.add('row');
            div1.style.gridRowStart = `${i}`
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


