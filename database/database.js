const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const URL = "mongodb://localhost:27017/CRUDSimOrdersDB"
let database
const connectDb = async ()=>{
    const clint = await MongoClient.connect(URL ,{ useUnifiedTopology: true })
    database = clint.db()
    return clint
}

const getDb = ()=>{
    if (database) {
        return database
    }
}

exports.getDb = getDb
exports.connectDb = connectDb