// Création d'une variable contenant les bouts de citations de Kaamelott et de Friends.
let series = {
    kaamelott: [
        [
            "Vous avez été marié comme moi, ",
            "Moi j’ai appris à lire, ben je souhaite ça à personne, ",
            "Donc pour résumer, je suis souvent victime des colibris, ",
            "C’est pas moi qui explique mal, ",
            "Si vous prenez aujourd’hui, "         
        ],
        [
            "vous savez que la monstruosité peut prendre des formes diverses, ",
            "la patience est un plat qui se mange sans sauce, ",
            "on met du beurre au fond du plat pour pas que le gratin colle, ",
            "on retombe le même jour mais une semaine plus tard, ",
            "j’étais soûl comme cochon, "        
        ],
        [
            "on plante des carottes, on ne joue pas les chefs d’État !",
            "c’est la conviction de les réaliser.",
            "il n’y a pas dans cette forêt d’animal plus dangereux que le lapin adulte !",
            "après demain à partir d’aujourd’hui.",
            "enfin à une vache près, c’est pas une science exacte."        
        ]
    ],
    friends: [
        [
            "Ils ne savent pas qu’on sait qu’ils savent qu’on sait ",
            "Mais qu’est-ce qui s’est passé ? ",
            "Quelqu’un au boulot a bouffé mon sandwich, ",
            "Je ne suis pas une commère moi, ",
            "La caméra donne toujours 5 kilos de plus, "        
        ],
        [
            "la première fois que t’as dit ça on était mort de rire, ",
            "oh… euh… euh… Joey est venu au monde et environ 28 ans après, je me suis fais cambrioler, ",
            "y’avait combien de caméras qui tournaient ce jour-là ? ",
            "au moins, on a fait un film sur mon métier, ",
            "et là, ça m’a fait comme si elle plongeait la main dans ma poitrine, "        
        ],
        [
            "qu’elle m’arrachait le cœur d’un coup et qu’elle maculait de sang toute ma vie.",
            "c’est pas tombé pendant qu’on sortait ensemble. Pendant trois ans ?",
            "ça m’étonnerait qu’il y ait un film “Jurassic Parka”, une bande de manteaux incontrôlables qui envahissent une île.",
            "et maintenant on est mort tout court !",
            "Je vais me suicider avec des yaourts périmés."        
        ]
    ]
}

// Déclaration de la variable pour le choix de type de citation entre Kaamelott et Friends.
let typeCitation;

// Changement de générateur de citations pour Friends.
// Actions de la fonction du bouton "changer pour friends".
function affichageFriends() {
    // Si choix pour Friends, la variable typeCitation prend la valeur 1.
    typeCitation = 1;
    // Changement de la couleur de fond du body.
    document.body.style.background = "#5D362E"
    // Changement de la couleur de fond du wrapper.
    document.getElementById('wrapper').style.background = "#E0AF7A";
    // Changement de la balise Title.
    document.title = 'Le générateur de citations (imaginaires) de Friends';
    // Changement du titre H1.
    document.getElementById('titre').innerHTML = "Le générateur de citations <strong>(imaginaires)</strong> de la série Friends";
    // Changement du logo.
    document.getElementById('logo').src = 'img/friends-logo.png';
    // Changement de l'image des personnages.
    document.getElementById('personnages').src = 'img/friends.jpg';
    // disparition du choix de changement pour friends.
    document.getElementById('changement-friends').style.display = 'none';
    // Effacement du contenu de la div si présence de citations de kaamelott.
    document.querySelector('#quote').innerHTML = '';
    // Camouflage des boutons de fin si afficher.
    document.getElementById('boutons-end').style.display = "none";
};

// Fonction de génération d'une citation aléatoire.
function genererAleatoire(serie) {
    let randomDebut = Math.floor(Math.random() * (serie[0].length));
    let randomMilieu = Math.floor(Math.random() * (serie[1].length));
    let randomFin = Math.floor(Math.random() * (serie[2].length));

    // retourne une citation générée aléatoirement.
    return serie[0][randomDebut] + serie[1][randomMilieu] + serie[2][randomFin];
}

// Fonction de récupération du bouton radio pour le nombre de citations à générer.
function getNombreCitation() {
    if (document.getElementById('nombre-citation1').checked) {
        return 1;
    }
    else if (document.getElementById('nombre-citation2').checked) {
        return 2;
    }
    else if (document.getElementById('nombre-citation3').checked) {
        return 3;
    }
    else if (document.getElementById('nombre-citation4').checked) {
        return 4;
    }
    else if (document.getElementById('nombre-citation5').checked) {
        return 5;
    }
};

// Fonction de génération des citations en réaction au bouton "générer".
function createCitation() {

    let nombreCitation = getNombreCitation();
    
    // fonction de remplissage de la div "quote" contenant les citations générées.
    function remplissageCitation(serie) {
        // Récupération de l'Id de la div qui va accueillir l'élément p.
        let returnQuote = document.querySelector('#quote');
        // Mise à blanc de la div
        returnQuote.innerHTML = '';
        // Boucle de génération des citations en fonction du nombre choisi.
        for (let i = 0; i < nombreCitation; i++) {
            // Création d'un élément p pour accueillir la citation.
            let elemP = document.createElement('p');
            // Génération de la citation et attribution à l'élément p.
            elemP.textContent = genererAleatoire(serie);
            // Insertion de l'élement p dans le DOM via la div ayant l'Id "quote".
            returnQuote.appendChild(elemP);

            // Mise en place du CSS pour la citation.
            returnQuote.style.backgroundColor = "#000";
            elemP.style.color = "#fff";
            elemP.style.fontSize = "18px";
            elemP.style.padding = "5px";
        }
    }
    // Génération des citations en fonction du type de citation choisi par l'utilisateur (Kaamelott ou Friends).
    if (typeCitation == 1) {
        // Si choix Friends.
        remplissageCitation(series.friends);
    } else {
        // Si choix Kaamelott.
        remplissageCitation(series.kaamelott);
    }
    // Affichage des boutons de fin de programme.
    document.getElementById('boutons-end').style.display = "block";
    
};

    // Choix de recommencer à générer des citations ou quitter.
    // Action du bouton "recommencer" = rechargement de la page.
    function reloadPage() {
        document.location.reload(true);
    }

    // Actions du bouton "quitter" = Effacement du contenu de la page et affichage d'un message d'au revoir.
    function quitPage() {
        document.getElementById('wrapper').innerHTML = '';
        // Création du message de fin.
        let elemPFin = document.createElement('p');
        elemPFin.textContent = "Merci de votre visite et à bientôt !";
        document.getElementById('wrapper').appendChild(elemPFin);

        // Mise en place du CSS pour le message de fin.
        elemPFin.style.fontSize = "36px";
        elemPFin.style.textAlign = "center";
        elemPFin.style.paddingTop = "100px";
        elemPFin.style.paddingBottom = "100px";
    }


