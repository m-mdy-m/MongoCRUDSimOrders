const getDb = require("../database/database").getDb
const mongodb = require('mongodb')
const objectId = mongodb.ObjectId
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
    static async findById(id){
        const db = getDb()
        return await db.collection("Product").findOne({_id : new objectId(id)})
    }
}

module.exports = Product