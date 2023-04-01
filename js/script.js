console.log("HJola")

pokemonElegido = document.getElementsByName('pokemon').values[0];
const URL_API = $`https://pokeapi.co/api/v2/pokemon/${pokemonElegido}`;

Atrapar = () => {

    console.log(URL_API)


}

Armado = (data) => {
    let card = document.querySelector('#card')
    card.innerHTML = ` <div class="card rounded-4 " style="width: 20rem;">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                        class="card-img-top rounded-4" alt="...">
                    <hr>
                    <div class="card-body pb-0">
                        <h5 class="card-title text font">Card title</h5>
                        <p class=" card-text font">Some quick example text to build on the card title and make up the
                            bulk of
                            the card's
                            content.</p>
                        <hr class="mb-1">
                    </div>

                    <div class="card-body d-flex justify-content-center">
                        <a href="#" class="btn btn-danger btn-atrapar mx-3" onclick="Atrapar()">Card link</a>
                        <a href="#" class="btn btn-warning">Another link</a>
                    </div>
                </div>`

}