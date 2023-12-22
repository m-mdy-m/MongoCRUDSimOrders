const mongodb = require('mongodb')
const getDb = require("../database/database").getDb
const objectId = mongodb.ObjectId


class User {
    constructor(username , email,cart,id){
        this.username = username
        this.email = email
        this.cart = cart
        this._id = id
    }
    async save(){
        const db = getDb()
        return db.collection("Users").insertOne(this)
    }
    static async findById(id){
        const db = getDb()
        return await db.collection(" Users").findOne({ _id: new objectId(id) })
    }
    async addCart(product){
        if (!this.cart) {
            this.cart = {items : []}
        }
    }
}

module.exports = User