const mongodb = require("mongodb");
const getDb = require("../database/database").getDb;
const objectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  async save() {
    const db = getDb();
    return db.collection("Users").insertOne(this);
  }
  static async findById(id) {
    console.log("id =>", id);
    const db = getDb();
    try {
      const newId = new objectId("65859b466ef84dc1adf01bc2");
      const user = await db.collection("Users").findOne({ _id: newId });
      console.log("user=>", user);
      return user;
    } catch (err) {
      console.error('Error finding user by ID:', err);
      throw err; 
    }
  }
}

module.exports = User;
