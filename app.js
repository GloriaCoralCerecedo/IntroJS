const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokemon");
    let pokeInput = pokeNameInput.value;
    pokeInput = pokeInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/ballpokemon.gif");
            pokeImage2("./img/ballpokemon.gif");
            pokeImage3("./img/ballpokemon.gif");
            pokeImage4("./img/ballpokemon.gif");
            limpiar();
            limpiarInput();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let id = data.id;
            pokeid(id);
            console.log(id);
            let name = data.name;
            pokename(name);
            console.log(name);
            let alt = data.height;
            pokealtura(alt/10);
            console.log(alt);
            let peso = data.weight;
            pokepeso(peso/10);
            console.log(peso);
            let tipos = data.types.map(typ => typ.type.name);
            poketipo(tipos);
            console.log(tipos);
            let movimiento = data.moves.map(move => move.move.name);
            pokemov(movimiento);
            console.log(movimiento);
            let habilidad = data.abilities.map(ability => ability.ability.name);
            pokehabilidad(habilidad);
            console.log(habilidad);
            let hp = data.stats[0].base_stat;
            pokestadistica1(hp);
            console.log(hp)
            let atk = data.stats[1].base_stat;
            pokestadistica2(atk);
            console.log(atk)
            let def = data.stats[2].base_stat;
            pokestadistica3(def);
            console.log(def)
            let satk = data.stats[3].base_stat;
            pokestadistica4(satk);
            console.log(satk);
            let sdef = data.stats[4].base_stat;
            pokestadistica5(sdef);
            console.log(sdef);
            let spd = data.stats[5].base_stat;
            pokestadistica6(spd);
            console.log(spd);
            let pokeImg2 = data.sprites.back_default;
            pokeImage2(pokeImg2);
            console.log(pokeImg2);
            let pokeImg3 = data.sprites.front_shiny;
            pokeImage3(pokeImg3);
            console.log(pokeImg3);
            let pokeImg4 = data.sprites.back_shiny;
            pokeImage4(pokeImg4);
            console.log(pokeImg4);
            limpiarInput();
            distica();
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeImage2 = (url) => {
    const pokePhoto = document.getElementById("pokeImg2");
    pokePhoto.src = url;
}
const pokeImage3 = (url) => {
    const pokePhoto = document.getElementById("pokeImg3");
    pokePhoto.src = url;
}
const pokeImage4 = (url) => {
    const pokePhoto = document.getElementById("pokeImg4");
    pokePhoto.src = url;
}
const pokename = (name) =>{
    const nombre = document.getElementById("name");
    nombre.innerHTML = ("Nombre: "+name);
}
const pokeid = (id) =>{
    const identificador = document.getElementById("id");
    identificador.innerHTML = ("# "+id);
}
const pokealtura = (alt) =>{
    const altura = document.getElementById("alt");
    altura.innerHTML = ("Altura: "+alt+" m");
}
const pokepeso = (peso) =>{
    const pokpeso = document.getElementById("peso");
    pokpeso.innerHTML = ("Peso: "+peso+" kg");
}
const poketipo = (tipo) =>{
    const type = document.getElementById("tipo");
    type.innerHTML = ("Tipo: "+tipo);
}
const pokemov = (movi) =>{
    const move = document.getElementById("movi");
    move.innerHTML = ("Movimientos: " + movi);
}
const pokehabilidad = (habilidad) =>{
    const ability = document.getElementById("habilidad");
    ability.innerHTML = ("Habilidad: " + habilidad);
}

const pokestadistica1 = (hp) =>{
    const distica1 = document.getElementById("hp");
    distica1.innerHTML = ("HP: "+ hp);
}

const pokestadistica2 = (atk) =>{
    const distica2 = document.getElementById("atk");
    distica2.innerHTML = ("ATK: " + atk);
}

const pokestadistica3 = (def) =>{
    const distica3 = document.getElementById("def");
    distica3.innerHTML = ("DEF: " + def);
}

const pokestadistica4 = (satk) =>{
    const distica4 = document.getElementById("satk");
    distica4.innerHTML = ("SATK: " + satk);
}
const pokestadistica5 = (sdef) =>{
    const distica5 = document.getElementById("sdef");
    distica5.innerHTML = ("SDEF: " + sdef);
}
const pokestadistica6 = (spd) =>{
    const distica6 = document.getElementById("spd");
    distica6.innerHTML = ("SPD: " + spd);
}


const distica = () =>{
    const show = document.getElementById("distica");
    show.innerHTML="Estadística";
}

//Limpieza

const limpiar = () =>{
    const clean = document.getElementById("id");
    clean.innerHTML="";
    const clean2 = document.getElementById("name");
    clean2.innerHTML="";
    const clean3 = document.getElementById("alt");
    clean3.innerHTML="";
    const clean4 = document.getElementById("peso");
    clean4.innerHTML="";
    const clean5 = document.getElementById("tipo");
    clean5.innerText="";
    const clean6 = document.getElementById("movi");
    clean6.innerHTML="";
    const clean7 = document.getElementById("habilidad");
    clean7.innerHTML="";
    const clean8 = document.getElementById("hp");
    clean8.innerHTML="";
    const clean9 = document.getElementById("atk");
    clean9.innerHTML="";
    const clean10 = document.getElementById("def");
    clean10.innerHTML="";
    const clean11 = document.getElementById("satk");
    clean11.innerHTML="";
    const clean12 = document.getElementById("sdef");
    clean12.innerHTML="";
    const clean13 = document.getElementById("spd");
    clean13.innerHTML="";
    const show = document.getElementById("distica");
    show.innerHTML="";
    
}

const limpiarInput = () =>{
    document.getElementById("pokemon").value = "";
}