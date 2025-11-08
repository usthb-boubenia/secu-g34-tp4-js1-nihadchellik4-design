"use strict";


// Exercice 2 - Tableaux et Objets JavaScript


/**
 * FONCTION f1()
 * Tableau simple d'étudiants
 * Slide 38 - Les tableaux
 */
function f1() {
    // Slide 38 - Déclaration d'un tableau
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    
    // Slide 44 - Boucle for pour parcourir le tableau
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

/**
 * FONCTION f2()
 * Objet étudiant avec propriétés
 * Slide 39 - Les objets
 */
function f2() {
    // Slide 39 - Création d'un objet
    const etudiant = {
        nom: "John",
        prenom: "DOE", 
        age: 30
    };
    
    // Slide 39 - Accès aux propriétés d'un objet
    console.log(etudiant);
}

/**
 * FONCTION f3()
 * Tableau d'objets étudiants
 * Slide 40 - Tableau d'objets
 */
function f3() {
    // Slide 40 - Création d'un tableau d'objets
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    
    // Slide 44 - Boucle for pour parcourir le tableau d'objets
    for (let i = 0; i < etudiants.length; i++) {
        const etudiant = etudiants[i];
        // Slide 39 - Accès aux propriétés de l'objet
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}