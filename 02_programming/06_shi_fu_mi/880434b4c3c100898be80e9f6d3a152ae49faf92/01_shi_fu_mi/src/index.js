const readline = require("readline");
const clear = () => console.log("\x1B[2J\x1B[0f");
// ShiFuMi
// On lance le jeu
// On salut les joueurs
// Montrer les choix possibles pour la partie.
// On demande au joueur de choisir un mouvement, mais comment faire en sorte que la machine choisisse un mouvement elle aussi ?
// Si le choix de l’utilisateur est possible, on effectue une partie puis on recommence une partie, sinon on affiche un msg d’erreur.
// donner le resultat de chaque fin de partie

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rock = [
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];
const paper = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];
const scissors = [
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];

reader.question("What is your name? :", (name) => {
  console.log(`Hello ${name}, welcome to the game: ShiFuMi`);
  reader.question("Choose your moove, rock paper scissors? [1, 2, 3]:\n>", shiFuMi);
});

function shiFuMi(moove) {
  if (moove === "1") {
    clear();
    rock.forEach(element => console.log(element));
  } else if (moove === "2") {
    clear();
    paper.forEach(element => console.log(element));
  } else if (moove === "3") {
    clear();
    scissors.forEach(element => console.log(element));
  } else {
    console.log("Mauvaise input");
    reader.question("Choose your moove, rock paper scissors? [1, 2, 3]", shiFuMi);
  }
  const choixOrdi = parseInt(Math.random() * (4 - 1) + 1);
  if (choixOrdi.toString() === "1") {
    rock.forEach(element => console.log(element));
  } else if (choixOrdi.toString() === "2") {
    paper.forEach(element => console.log(element));
  } else if (choixOrdi.toString() === "3") {
    scissors.forEach(element => console.log(element));
  }
  if (
    (moove === "1" && choixOrdi === "3") ||
    (moove === "2" && choixOrdi === "1") ||
    (moove === "3" && choixOrdi === "2")
  ) {
    console.log("You Win");
  } else if (
    (moove === "1" && choixOrdi === "1") ||
    (moove === "2" && choixOrdi === "2") ||
    (moove === "3" && choixOrdi === "3")
  ) {
    console.log("égalité");
  } else {
    console.log("You Loose");
  }
}
