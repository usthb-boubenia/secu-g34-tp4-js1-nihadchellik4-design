"use strict";

// Exercice 3 


/**
 * Tableau d'étudiants avec les VRAIES notes qui donnent le résultat attendu
 * 
 */// Slide 40 - Création d'un tableau d'objets étudiants
const students = [
    [1000, "JOHN", "DOE", 14, 12],     
    [2000, "BOB", "CARLTON", 7, 8],    
    [3000, "RAVANE", "SMITH", 13, 11]  
];

/**
 * Fonction B - Vérifie si un étudiant est admis
 *  Slide 45 - Les fonctions avec paramètres et retour
 * @param {number} note - La note de l'étudiant (type float)
 * @returns {boolean} - true si admis, false si ajourné
 */
function fonctionB(note) {
    // Slide 42 - Condition pour déterminer l'admission
    // Slide 41 - Opérateur de comparaison >=
    return note >= 10;
}

/**
 * Fonction A - Gère la délibération de tous les étudiants
 * Appelle la fonction B pour chaque étudiant
 *  Slide 45 - Les fonctions
 * Slide 40 - Tableau d'objets
 * Slide 44 - Boucle for
 */
function fonctionA() {
    // Slide 44 - Boucle for pour parcourir le tableau d'étudiants
    for (let i = 0; i < students.length; i++) {
        const etudiant = students[i];
        const id = etudiant[0];    
        const note = etudiant[4];  
        
        // Slide 45 - Appel de la fonction B avec la note de l'étudiant
        const estAdmis = fonctionB(note);
        
        // Slide 42 - Condition if/else pour déterminer le statut
        if (estAdmis) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}

/**
 * Fonction principale de délibération
 */
function deliberation() {

    fonctionA();

}