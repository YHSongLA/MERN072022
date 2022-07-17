// IMPORT CONTROLLER
const jokesApiController = require("../controllers/jokesApi.controllers")

// DEFINE ROUTES
module.exports = (app) => {
    app.get("/api/test", jokesApiController.test)
    app.post("/api/joke", jokesApiController.createJoke)
    app.get("/api/joke", jokesApiController.getAllJokes)
    app.get("/api/joke/:id", jokesApiController.getOneJoke)
    app.put("/api/joke/:joke_id", jokesApiController.updateJoke)
    app.delete("/api/joke/:joke_id", jokesApiController.destroyJoke)
}