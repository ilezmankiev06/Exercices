import * as mongo from "mongodb";

type Obj = [{
  name: string,
  capital: string,
  continent: string,
}]

export function insertManyCountries(db: mongo.Db): Promise<Obj[]> {
  // code your function here
  const Abou = [
    {
    name: "Finlande",
    capital: "Helsinki",
    continent: "EU",
    }, {
    name: "Suede",
    capital: "Stockholm",
    continent: "EU",
  }]
  db.collection("worldAtlas")
    .insertMany(Abou)
  return db.collection("worldAtlas")
  .find({continent: "EU"})
  .toArray()
}
