const getDb = require("../database/database").getDb

class Product {
    constructor(name , price){
        this.name = price
        this.price = price
    }
    async save(){
        const db = getDb()
        return await db.collection("Product").insetOne(this)
    }
}