// Demande un choix : 

// On rentre dans la boucle principale
let restart = false; // Cette variable vaut 'false' ce qui veut dire que par défaut, nous ne reproposons pas un calcul.

do {
    // recueille le choix de l'utilisateur
    do {
       var choix = parseInt(prompt('Que souhaitez-vous faire?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustration\n 4 - Division'));
    } while((choix != 1 && choix != 2 && choix != 3 && choix != 4))

    // Demande deux nombres :
    // la fonction isNaN : renvoie 'true' si la variable n'est pas un nombre
    do {
        var premierNombre = Number(prompt('Entrez un premier nombre :'));
        var deuxiemeNombre = Number(prompt('Entrez un deuxième nombre :'));
    } while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

    // On crée les 4 fonctions :
    // Fonction pour additionner
    function addition(nombreA, nombreB) {
        return nombreA + nombreB;
    }

    // Fonction pour multiplier
    function multiplication(nombreA, nombreB) {
        return nombreA * nombreB;
    }

    // Fonction pour soustraire
    function soustraction(nombreA, nombreB) {
        return nombreA - nombreB;
    }

    // Fonction pour diviser
    // exception lorsque nombreB vaut 0 : il est interdit de diviser par 0.
    function division(nombreA, nombreB) {
       if(nombreB == 0) {
          throw new Error('Impossible de diviser par 0.');
       }
        return nombreA / nombreB;
    }

    // Appelle la fonction choisie :
    try {
        switch (choix) {
            case 1:
                var resultat = addition(premierNombre, deuxiemeNombre);
                break;
        
            case 2:
                var resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
        
            case 3:
                var resultat = soustraction(premierNombre, deuxiemeNombre);
                break;

            case 4:
                var resultat = division(premierNombre, deuxiemeNombre);
                break;

            default:
                throw new Error('Une erreur est survenue.'); // sert à alerter d'un bug potentiel!
        }

    // Affiche le résultat :
        alert('Voici le résultat : ' + resultat);
    }
    catch(error) {
        alert(error); // Si une erreur est survenue on affiche l'erreur
    }
    restart = confirm("Souhaitez-vous recommencer un opération?"); // confirm() permet à l'utilisateur de recommencer
} while(restart)