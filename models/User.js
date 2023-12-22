const mongodb = require('mongodb')
const getDb = require("../database/database").getDb
const objectId = mongodb.ObjectId


class User {
    constructor(username , email,id){
        this.username = username
        this.email = email
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
}

module.exports = User