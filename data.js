let moviesData = [];
let cart = {};
const api = 'https://www.omdbapi.com/?apikey=d499cdbe';

const moviesApi = [
    api+'&t=candy',
    api+'&t=n',
    api+'&i=tt3896198',
    api+'&t=star',
    api+'&t=la',
    api+'&t=mario',
    api+'&t=anabelle',
    api+'&t=veronica',
    api+'&t=esau',
    api+'&t=forever',
    api+'&t=gat',
    api+'&t=sofia',

];

const apiFetch = async url => {
    console.log("url",url);
    const res = await fetch(url);
    const movie = await res.json();
    moviesData.push(movie);
}

for (let i = 0; i < moviesApi.length; i++) {
    apiFetch(moviesApi[i]);
}

