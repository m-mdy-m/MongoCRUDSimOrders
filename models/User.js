const mongodb = require("mongodb");
const getDb = require("../database/database").getDb;
const objectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }
  async save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }
  static async findById(id) {
    const db = getDb();
    return await db.collection("users").findOne({ _id: new objectId(id) });
  }
  async addToCart(product) {
    const db = getDb()
    if (!this.cart) {
        this.cart = {items : []}
    }
    const carts = this.cart.items
    console.log('carts =>', carts);
    return await db.collection("users").updateOne({_id : new objectId(this._id)})
  }
}

module.exports = User;
