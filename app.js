const playerContainer = document.querySelector('.container');
const gridBtn = document.querySelector('.gridselect')
const div = document.createElement('div');
const clrBtn = document.querySelector('.clearbtn')


gridBtn.addEventListener('click', layout16Grid)

clrBtn.addEventListener('click', clearGame)

function createColor(something, color){
    something.style.backgroundColor = color;
}


 function layout16Grid(){
    playerContainer.style.gridTemplateColumns = "repeat(16, 60px)";
    playerContainer.style.gridTemplateRows = "repeat(16, 31px)"
    playerContainer.style.backgroundColor = 'magenta'

    for(i=1; i<=16; i++){
        for(j=0; j<16; j++){
            let div1 = document.createElement('div');
            div1.classList.add('row');
            div1.style.gridRowStart = `${i}`
            playerContainer.appendChild(div1);

            div1.addEventListener('mouseover', function() {
                createColor(div1, 'orange')
            })
        }
    }
} 


function clearGame(){
 location.reload()
}


