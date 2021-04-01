/* global db */

// write your MongoDB shell command here
const newLieu = [
    {
    name: "Belgique",
    capital: "Brussels",
    continent: "Europe",
    },
    {
    name: "Espagne",
    capital: "Barcelone",
    continent: "Europe",  
    },
    {
    name: "Italie",
    capital: "Rome",
    continent: "Europe",  
    }
]
db.worldAtlas.insertMany(newLieu)