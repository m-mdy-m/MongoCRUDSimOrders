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
    return db.collection("Users").insertOne(this);
  }
  static async findById(id) {
    const db = getDb();
    return await db.collection(" Users").findOne({ _id: new objectId(id) });
  }
  async addCart(product) {
    const db = getDb()
    if (!this.cart) {
      this.cart = { items: [] };
    }
    let baseQty = 1;
    const update = [...this.cart.items];
    console.log("update =>", update);
    console.log("this.cart.items =>", this.cart.items);
    update.push({
      prodId: new objectId(product._id),
      qty: baseQty,
    });
    const updateCart = {
        items : update
    }
    return await db.collection('Users').updateOne({_id : new objectId(this._id)},{$set : {cart: updateCart}})
  }
}

module.exports = User;
