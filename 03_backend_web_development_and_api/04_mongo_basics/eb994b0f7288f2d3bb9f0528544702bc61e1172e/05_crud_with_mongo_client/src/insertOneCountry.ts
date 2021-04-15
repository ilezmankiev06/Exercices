import * as mongo from "mongodb";

type Obj = {
  name: string,
  capital: string,
  continent: string,
}

export function insertOneCountry(db: mongo.Db): Promise<Obj> {
  const pays: Obj = {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  };
  return db.collection("worldAtlas")
    .insertOne(pays)
    .then((doc) => {
      return doc.ops[0];
    });
}
