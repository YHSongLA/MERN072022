const mongoose = require("mongoose")

// DEFINE SCHEMA
const JokesApiSchema = new mongoose.Schema({
    joke: {
        type: String,
        // CUSTOM VALIDATION MSG
        minLength:[2, "Joke has to be must be 2 characters long"]
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const Joke = mongoose.model("Joke", JokesApiSchema)

// EXPORT JOKESAPI SHCEMA
module.exports = Joke