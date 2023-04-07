/* cattura navbar*/

let mainNavbar = document.querySelector('#mainNavbar'); 

document.addEventListener('scroll', ()=>{

    
    if(document.scrollY > 0){

    mainNavbar.classList.remove('background-seondaryC')
    mainNavbar.classList.add('background-primaryC')

    
} else {

    mainNavbar.classList.remove('background-primaryC')
    mainNavbar.classList.add('background-secondaryC')
    
}



})

function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            counter++

            element.innerHTML = counter;


        } else {

            clearInterval(interval);

        }

    }, 1)

}

createInterval();


let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');



createInterval(1500, firstSpan);
createInterval(300, secondSpan);
createInterval(100, thirdSpan);
