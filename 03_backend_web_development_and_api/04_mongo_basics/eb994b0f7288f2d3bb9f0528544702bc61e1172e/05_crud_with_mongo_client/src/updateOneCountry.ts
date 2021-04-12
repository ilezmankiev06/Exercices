import * as mongo from "mongodb";

type Obj = {
  name: string,
  capital: string,
  continent: string,
}

export function updateOneCountry(db: mongo.Db): Promise<Obj> {
  // code your function here
  db.collection("worldAtlas")
  .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })

  return db.collection("worldAtlas")
  .findOne({capital: "Canberra"})
}
