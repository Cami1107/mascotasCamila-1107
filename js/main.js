// capturar en una variable el id que va a cambiar
function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.remove("active");
    imgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");
}

function activarImgB(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.add("active");
    imgA.classList.remove("active");

    btnB.classList.add("active");
    btnA.classList.remove("active");
}
// Cambiar colores home
function activarBtnA(){
    let cardPerros = document.getElementById("card-perros"); //A
    let cardGatos = document.getElementById("card-gatos");  //B

    let btnPerros = document.getElementById("btn-perros"); //A
    let btnGatos = document.getElementById("btn-gatos"); //B

    let imgPerros = document.getElementById("img-perros");
    let imgGatos = document.getElementById("img-gatos");

    // cambiar contenido
    cardGatos.classList.remove("active");
    cardPerros.classList.add("active");

    // cambiar color del boton
    btnGatos.classList.remove("active");
    btnPerros.classList.add("active");

    // cambiar fondo de la imagen del boton
    imgGatos.classList.remove("active");
    imgPerros.classList.add("active");

    gatos.classList.remove("active");
    perros.classList.add("active");

}

function activarBtnB(){
    let cardPerros = document.getElementById("card-perros"); //A
    let cardGatos = document.getElementById("card-gatos");  //B

    let btnPerros = document.getElementById("btn-perros"); //A
    let btnGatos = document.getElementById("btn-gatos"); //B

    let imgPerros = document.getElementById("img-perros");
    let imgGatos = document.getElementById("img-gatos");

    // cambiar contenido

    cardPerros.classList.remove("active");
    cardGatos.classList.add("active");

    // cambiar boton
    btnPerros.classList.remove("active");
    btnGatos.classList.add("active");

    // cambiar color de fondo
    imgPerros.classList.remove("active");
    imgGatos.classList.add("active");

}
