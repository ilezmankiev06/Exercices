function lire2(tab) {
  let chaine = "Le tableau contient :";
  for(let indice in tab)
    chaine += "\n" + indice + " -> " + tab[indice];
  return chaine;
}
console.log(lire2());
