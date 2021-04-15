import * as mongo from "mongodb";

export function deleteOneCountry(db: mongo.Db): Promise<boolean> {
  // code your function here
  return db.collection("worldAtlas")
  .deleteOne({name: "France"})
  .then((doc) => {
    if (doc.deletedCount === 1) {
      return true
    } else {
      return false
    }
  })
}
