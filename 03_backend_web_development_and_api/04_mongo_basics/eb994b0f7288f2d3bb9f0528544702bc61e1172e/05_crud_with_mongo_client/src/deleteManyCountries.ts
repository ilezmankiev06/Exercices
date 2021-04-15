import * as mongo from "mongodb";

export function deleteManyCountries(db: mongo.Db): Promise<boolean> {
  // code your function here
  return db.collection("worldAtlas")
  .deleteMany({continent: "Europe"})
  .then((doc) => {
    if (doc.deletedCount > 0) {
      return true
    } else {
      return false
    }
  })
}
