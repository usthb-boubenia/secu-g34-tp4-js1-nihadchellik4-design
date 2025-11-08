"use strict";


// Exercice 3 - Délibération des étudiants


/**
 * FONCTION B()
 * Vérifie si un étudiant est admis basé sur sa note
 * Slide 45 - Les fonctions avec paramètres et retour
 * @param {number} note - La note de l'étudiant (type float)
 * @returns {boolean} - true si admis, false si ajourné
 */
function B(note) {
    // Slide 42 - Condition pour déterminer l'admission
    // Slide 41 - Opérateur de comparaison >=
    return note >= 10;
}

/**
 * FONCTION A()
 * Fonction principale qui traite tous les étudiants
 * Slide 45 - Les fonctions
 * Slide 40 - Tableau d'objets
 * Slide 44 - Boucle for
 */
function A() {
    // Slide 40 - Création d'un tableau d'objets étudiants
    
    const students = [
        { id: 1000, nom: "JOHN", prenom: "DOE", age: 14, note: 14 },
        { id: 2000, nom: "BOB", prenom: "CARLTON", age: 7, note: 7 },
        { id: 3000, nom: "RAYANE", prenom: "SMITH", age: 13, note: 13 }
    ];
    
    // Slide 44 - Boucle for pour parcourir le tableau d'étudiants
    for (let i = 0; i < students.length; i++) {
        const etudiant = students[i];
        
        // Slide 45 - Appel de la fonction B avec la note de l'étudiant
        const estAdmis = B(etudiant.note);
        
        // Slide 42 - Condition if/else pour déterminer le statut
        if (estAdmis) {
            console.log(`${etudiant.id} : ADMIS`);
        } else {
            console.log(`${etudiant.id} : AJOURNÉ`);
        }
    }
}