const getDb = require("../database/database").getDb
const mongodb = require('mongodb')
const objectId = mongodb.ObjectId
class Product {
    constructor(name , price,id,userId){
        this.name = name
        this.price = price
        this._id = new objectId(id)
        this.userId = userId
    }
    async save(){
        let dbUp;
        const db = getDb()
        if (this._id) {
            dbUp = await db.collection("Product").updateOne({_id : this._id}, {$set : this})
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
    static async deleteById(id){
        const db = getDb()
        return await db.collection('Product').deleteOne({_id : new objectId(id)})
    }
}

module.exports = Product