const getDb = require("../database/database").getDb

class Product {
    constructor(name , price){
        this.name = name
        this.price = price
    }
    async save(){
        const db = getDb()
        return await db.collection("Product").insertOne(this)
    }
    static fetchAll(){
        const db = getDb()
        return db.collection('Product').find().toArray()
    }
}

module.exports = Product