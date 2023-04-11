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





fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {


let categoryWrapper = document.querySelector('#categoryWrapper');

let cardsWrapper = document.querySelector('#cardsWrapper')

function setCategoryFilters(){

let categories = data.map( (annuncio)=> annuncio.category ); 

let uniqueCategories = []; 


categories.forEach ( (category)=> {

    
    if( !uniqueCategories.includes(category)){


        uniqueCategories.push(category)
    }

} )



uniqueCategories.forEach( (category)=>{


    let div = document.createElement('div');

    div.classList.add('form-check');

    div.innerHTML = `

                 <label class="form-check-label" for="${category}">
                 ${category}
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                 </label>
                 
    
    
    `;

    categoryWrapper.appendChild(div);



}  )


}

setCategoryFilters();

/*mostra cards*/

function showCards(array){

    
    array.forEach( (element)=>{

        let div = document.createElement('div');

        div.classList.add('col-12' ,  'col-md-3' , 'my-5')

        div.innerHTML = `
                        <div class="announcement-card">

                        <h3>${element.category}</h3>
                        <h3>${element.price} € </h3>
                        
                        <p class="h3">${element.name}</p>
                         </div>
        
        `;

        cardsWrapper.appendChild('div'); 


    })

    
}

showCards(data);

} )



