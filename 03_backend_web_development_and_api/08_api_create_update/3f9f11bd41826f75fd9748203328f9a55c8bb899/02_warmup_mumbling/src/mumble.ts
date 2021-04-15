//cree un tableau vide 
//separer chaque lettre et stocker dans un tableau
//pour chaque element les dupliquer selon son index
//push dans le tableau vide 
//mettre en miniscule
// return

export function mumble(input: string): string {
  const tableau = []
  input.split("").forEach((element, index) => {
    for (let i = -1; i < index; i++) {
      tableau.push(element)
    }
      tableau.push("-")
  })
  tableau.pop()
  return tableau.join("").toLowerCase();
}