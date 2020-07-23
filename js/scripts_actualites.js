let images = ["images/event_figeac.jpg","images/event_livernon.jpg","images/event_teyssieu.jpg"];
let intervalle;

window.onload = () => {
    let flecheDroite = document.querySelector ("i:last-child");

    flecheDroite.addEventListener("click", avanceImage);

    let flecheGauche = document.querySelector ("i:nth-child(2)");

    flecheGauche.addEventListener("click", reculeImage);

    intervalle = setInterval(avanceImage, 2000);

    let baliseMain = document.querySelector("main");

    baliseMain.addEventListener("mouseover", stopInterval);
    baliseMain.addEventListener("mouseout", startInterval);

    // On va chercher tous les liens de la page
    let liens = document.querySelectorAll("a");
    
    // On boucle sur la liste des liens
    for(let lien of liens){
        lien.addEventListener("click", clicLien);
    }
}

/**
 * Cette fonction fait avancer le diaporama d'une image
 */
function avanceImage(){
    // On sort la 1ere image du tableau
    let image = images.shift();
    //On remet l'image à la fin du tableau
    images.push(image);

    let baliseImg = document.querySelector("main img");
    baliseImg.src = images[0];
}

/**
 * Cette fonction fait reculer l'image
 */
function reculeImage(){
    // On retire le dernier élément du tableau images
    let image = images.pop();

    //On remet l'image dans en 1ere postion
    images.unshift(image);

    // On remet à jour l'image dans la page
    let baliseImg = document.querySelector ("main img");
    baliseImg.src = images[0];
}

function stopInterval(){
    clearInterval(intervalle);
}

function startInterval(){
    intervalle = setInterval(avanceImage, 2000);
}