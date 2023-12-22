const mongodb = require('mongodb')
const getDb = require("../database/database").getDb
const objectId = mongodb.ObjectId


class User {
    constructor(username , email){
        this.username = username
        this.email = email
    }
    async save(){
        const db = getDb()
        return db.collection("Users").insertOne(this)
    }
    static async findById(id){
        console.log('id =>',id);
        const db = getDb()
        const user = await db.collection("Users").findOne({_id: new objectId(id) })
        // const user = await db.collection(" Users").findOne({ _id: new objectId(id) });
    console.log('user =>',user);
    }
}

module.exports = User