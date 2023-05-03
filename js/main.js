const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botao = document.querySelector('.botao');
const nuvem = document.querySelector('.nuvem');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump' )
    }, 500);
} 

const loop = setInterval(() => {  

    const pipePosition = pipe.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/marioGameOver-removebg-preview.png";
        mario.style.width = '73px';
        mario.style.marginLeft = '20px';

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;

        clearInterval(loop);
    } 

}, 10);

function reiniciar(){
    window.location.reload(true);
}

botao.addEventListener('click', reiniciar);

document.addEventListener('keydown', jump);