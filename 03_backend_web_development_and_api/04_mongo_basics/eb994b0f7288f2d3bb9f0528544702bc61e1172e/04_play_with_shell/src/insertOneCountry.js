/* global db */

// write your MongoDB shell command here
const lieu = {
    name: "France",
    capital: "Paris",
    continent: "Europe",
}
db.worldAtlas.insertOne(lieu)