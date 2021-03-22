// Lancer la calculette
// demander d'entrer un numéro
// User entre un numéro
// demander quel opération le user souhaite faire
// User entre l'opération souhaiter
// calculette demande un deuxième numéro
// User entre le deuxième numéro
// la calculette retourne le resultat de l'opérationimport readline from "readline";

function calculator(reader) {
  console.log("Welcome to your calculator!");
  const askFirstNumber = () => {
    reader.question("Enter your first number: \n", (value1) => {
      if (checkNumber(value1) !== value1) {
        console.log("Not a number");
        askFirstNumber();
      } else {
        reader.question("Enter the operation [+ * / -]: \n", (operation) => {
          const askSecondNumber = () => {
            reader.question("Enter your second number: \n", (value2) => {
              if (checkNumber(value2) !== value2) {
                console.log("Not a number");
                askSecondNumber();
              } else {
                function calcul() {
                  if (operation === "+") {
                    let result = parseInt(value1) + parseInt(value2);
                    console.log(result);
                  } else if (operation === "*") {
                    let result = parseInt(value1) * parseInt(value2);
                    console.log(result);
                  } else if (operation === "/") {
                    let result = parseInt(value1) / parseInt(value2);
                    console.log(result);
                  } else if (operation === "-") {
                    let result = parseInt(value1) - parseInt(value2);
                    console.log(result);
                  }
                  reader.close();
                }
                calcul();
              }
            });
          };
          askSecondNumber();
        });
      }
    });
  };
  askFirstNumber();
}
function checkNumber(value) {
  if (isNaN(value)) {
    return null;
  } else {
    return value;
  }
}

export default calculator;
