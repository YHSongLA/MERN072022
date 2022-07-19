// IMPORT CONTROLLER
const productManagerController = require("../controllers/productManager.controllers")

// DEFINE ROUTES
module.exports = (app) => {
    app.post("/api/products", productManagerController.createProduct)
    app.get("/api/products", productManagerController.getAllProducts)
    app.get("/api/products/:product_id", productManagerController.getOneProduct)
}