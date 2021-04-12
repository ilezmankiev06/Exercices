import * as mongo from "mongodb";

type Obj = {
  name: string,
  capital: string,
  continent: string,
}

export function updateManyCountries(db: mongo.Db): Promise<Obj[]> {
  // code your function here
  db.collection("worldAtlas")
  .updateMany({ continent: "Europe"}, { $set: { continent: "EU" } })

  return db.collection("worldAtlas")
  .find({continent: "EU"})
  .toArray()
}
