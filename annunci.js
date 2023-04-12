/* cattura navbar*

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
/*

/*
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

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');



createInterval(1500, firstSpan);
createInterval(300, secondSpan);
createInterval(100, thirdSpan);
*/








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



console.log(uniqueCategories);

uniqueCategories.forEach( (category)=>{


    let div = document.createElement('div');

    div.classList.add('form-check');

    div.innerHTML = `

                 <label class="form-check-label" for="${category}">
                 ${category}
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                 </label>
                 
    
    
    `;
  console.log(category);
    categoryWrapper.appendChild(div);



})


    /*cattura range input*/

    let inputPrice = document.querySelector('#inputPrice');

    let incrementNumber = document.querySelector('#incrementNumber');

    
    
    function setInputPrice(){

        let prices = data.map((annuncio)=> Number (annuncio.price) );
        
        let maxPrice = Math.max(...prices); 

        inputPrice.max = Math.ceil = (maxPrice); 

        inputPrice.value = Math.ceil(maxPrice);
        
        incrementNumber.innerHTML = Math.ceil(maxPrice);

        

    }

    setInputPrice();


}
    function filterbyPrice(prezzo){

    let filtered = data.filter(  (annuncio)=> annuncio.price <= prezzo );

    showCards(filtered);

}



    inputPrice.addEventListener('input', ()=>{

    filterbyPrice(inputPrice.value);

    incrementNumber.innerHTML = inputPrice.value;

})





setCategoryFilters();










/*mostra cards*/

function showCards(array){


    

    array.sort((a,b) => Number(b.price - a.price));

    
    array.forEach( (element)=>{

        let div = document.createElement('div');

        div.classList.add('col-12' ,  'col-md-3' , 'my-5')

        div.innerHTML = `
                        <div class="announcement-card">

                        <img class="img-card-custom" src="https://picsum.photos/200" alt="> 

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

function filterbyCategory(categoria){
    function filterByCategory(array){

        let arrayFromNodelist = Array.from(checkInputs);

        let button = arrayFromNodelist.find((bottone)=> bottone.checked);

        let categoria = button.id;

        // console.log(categoria);


        if(categoria != 'All'){

            let filtro = data.filter( (annuncio)=> annuncio.category == categoria );
            let filtro2 = array.filter( (annuncio)=> annuncio.category == categoria );

            showCards(filtro);
            return filtered;

        } else {

            showCards(data);
            return data;

        }

        
    }
}