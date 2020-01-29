async function leerJson(title) {
    // const url = "http://www.omdbapi.com/?t=titanic&apikey=f4fea2a9";
    try {
        const url = `http://www.omdbapi.com/?t=${title}&apikey=f4fea2a9`;
        const response = await fetch(url);
        const data = await response.json();
        return data;       
    } catch (error) {
        throw new Error(error);
    }
}
let info;
function botonClick (){
    console.log("click");
    
    let pelicula = document.getElementById('input').value;
    console.log(pelicula);
    
    leerJson(pelicula)
    .then( 
        function ( data ) {
            console.log((data));
            
            info = data; 
            document.getElementById('pre').innerHTML= JSON.stringify( info);
        }
     )
    .catch( function ( error ) {
        const h1 = document.createElement("h1")    
        h1.textContent = "ERROR";
        document.getElementsByTagName("body")[0].appendChild(h1);
})
}