let nombreArtista = document.getElementById('nombreArtista');
let nombreAlbum = document.getElementById('nombreAlbum');
let fotoArtista = document.getElementById('fotoArtista');
let listaCanciones = document.getElementById('listaCanciones');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82c331f6b9msh56dfd4f13c1594cp101eefjsn6d2154f30e97',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/albums/?ids=4SZko61aMnmgvNhfhgTuD3', options)
        .then(response => response.json())
        .then(response => {
                console.log(response.albums[0].name);
                console.log(response.albums[0].artists[0].name);
                console.log(response.albums[0].images[0].url);
                console.log(response.albums[0].tracks.items[0].preview_url);
 
                nombreArtista.innerHTML = response.albums[0].artists[0].name;
                nombreAlbum.innerHTML = response.albums[0].name;
                fotoArtista.src = response.albums[0].images[0].url;
 
                let canciones = response.albums[0].tracks.items;
 
                canciones.forEach((cancion,index)=>{
                    console.log(cancion);
                });
    
 
        })
        .catch(err => console.error(err));