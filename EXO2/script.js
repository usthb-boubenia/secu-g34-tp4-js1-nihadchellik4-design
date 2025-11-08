"use strict";

// Exercice 2 


/**
 * Fonction F1 - Affiche un tableau d'étudiants simples
 * Slide 38 - Les tableaux
 */
function f1() {
    console.log("=== Tableau Etudiants ===");
    
    // Slide 38 - Déclaration d'un tableau
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    
    // Parcours du tableau avec for...of - vu dans le cours slide 44
    for (const etudiant of etudiants) {
        console.log(etudiant);
    }
}

/**
 * Fonction F2 - Affiche un objet étudiant
 * Utilisation des objets - vu dans le cours slide 39
 */
function f2() {
    console.log("=== Objet Etudiant ===");
    
    // Création d'un objet étudiant - vu dans le cours slide 39
    const etudiant = {
        nom: "John",
        prenom: "DOE", 
        age: 30
    };
    
     // Slide 39 - Accès aux propriétés d'un objet
    console.log(etudiant);
}

/**
 * Fonction F3 - Affiche un tableau d'objets étudiants formatés
 * Combinaison tableaux et objets - vu dans le cours slide 40
 */
function f3() {
    console.log("=== Tableau d'objets Etudiants ===");
    
    // Tableau d'objets étudiants - vu dans le cours slide 40
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    
    // Parcours et affichage formaté - vu dans le cours slide 44
    for (const etudiant of etudiants) {
        // Slide 39 - Accès aux propriétés de l'objet
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}