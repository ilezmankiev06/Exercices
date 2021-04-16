// function avec parametre type string
// mettre les lettres du mot dans l'ordre alphabetique
// chaque lettres ne soit presente qu'une seule fois
// compter le nombre de lettre
// return un object qui contien cle et valeur 
// de chaque lettre 
// les lettres sont compter, 
// sortie de maniere a etre dans l'ordre alphabetique 


function lettersCounter(word: string) {
    const michou = {};
    const letters = word.split("");
    letters.sort();
    // letters.forEach((letter) => {
        // let countLetter = letters.filter(currentLetter => { currentLetter === letter
        //     let result = countLetter
        //     console.log(result);
        // })
    // })
    for (let i = 0; i < letters.length; i++) {
        const countLetter = letters.filter(currentLetter => { return currentLetter === letters[i] })
        console.log(countLetter)
        console.log(countLetter.length)
        
    }
}
console.log(lettersCounter("maman"));