const getDb = require("../database/database").getDb
const mongodb = require('mongodb')
const objectId = mongodb.ObjectId
class Product {
    constructor(name , price,id){
        this.name = name
        this.price = price
        this._id = id
    }
    async save(){
        let dbUp;
        const db = getDb()
        if (this._id) {
            dbUp = await db.collection("Product").updateOne({_id : new objectId(this._id)}, {$set : this})
        }else{
            dbUp = await db.collection("Product").insertOne(this)
        }
        return dbUp
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