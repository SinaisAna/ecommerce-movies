
let innetCard = document.getElementById("container-innert");
var card1;

const movieCard = (movie) => {
    return ` <div id="cards" class="container-cards">
            <div class="cards-one">
                <div>
                    <img src="${movie.Poster}" alt="">
                </div>
                <div class="text-conten-card">
                <div>
                    <p>${movie.Title}</p>
                    <p>${movie.Language}</p>
                </div>
                <button id="add_${movie.imdbID}" type="button" class="button-add-cards">Añadir al carrito</button>
            </div>
            </div>
        </div>`
}

const movieCart = (movie) => {
   return `<div id="cart_content_${movie.imdbID}" class="content-cart">
        <tr><td><img src="${movie.Poster}" alt=""></td>
        <div class="conten-text-cards">
        <td><p class="text-center">${movie.Title}</p></td><br/>
        <td><p>${movie.Language}</p></td><br/><br/>
        </div>
        <td><button id="delete_${movie.imdbID}">X</button></td>
        </tr>
</div>`;
}
const removeMovieCart=(id) =>{
    
    document.getElementById('cart_content_'+id).remove();
    document.getElementById("add_"+id).classList.remove("hidden")
}

const addCart=(movie) =>{
    let container_cart = document.getElementById("container-float");
    container_cart.innerHTML+=movieCart(movie);
    document.getElementById("add_"+ movie.imdbID).classList.add("hidden");
    //const id= "delete_"+movie.imdbID;
    for (let i = 0; i < moviesData.length; i++) {
        const id = 'delete_' + moviesData[i].imdbID;
        if(document.getElementById(id)){
            document.getElementById(id).addEventListener('click', () => {
                
                removeMovieCart( moviesData[i].imdbID);
            });
        }
        
    }
    
}

 const listMovies=(movies) =>{
    let items = document.createElement('div');
    console.log("movies",movies.length);
    for (let i = 0; i < movies.length; i++) {
        items.innerHTML += movieCard(movies[i]);
    }
    innetCard.innerHTML = items.innerHTML;
    console.log(items);
    for (let i = 0; i < movies.length; i++) {
        const id = 'add_' + movies[i].imdbID;
        document.getElementById(id).addEventListener('click', () => {
            addCart(movies[i]);
        })
    }

 };
 const removeCart=() =>{
    let containerFloat = document.getElementById("container-float")
    if(containerFloat.classList.contains("hidden")){
        containerFloat.classList.remove("hidden");
    }else{
        containerFloat.classList.add("hidden");
    }
        
}
//console.log(movies);
setTimeout(() => {
    console.log('dataArr: ', moviesData);
    listMovies(moviesData);
}, 1500);
 




