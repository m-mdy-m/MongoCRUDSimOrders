const mongodb = require("mongodb");
const getDb = require("../database/database").getDb;
const objectId = mongodb.ObjectId;

class People {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }
  async save() {
    const db = getDb();
    return db.collection("people").insertOne(this);
  }
  static async findById(id) {
    const db = getDb();
    return await db.collection("people").findOne({ _id: new objectId(id) });
  }
  async addToCart(product) {
    if (!this.cart) {
        this.cart = { items: [] };
    }
    const cartProductIndex = this.cart.items.findIndex(cp => {
        return cp.prodId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updateCartItems = [...this.cart.items];
    if (cartProductIndex >= 0) {
        newQuantity = this.cart.items[cartProductIndex].quantity + 1;
        updateCartItems[cartProductIndex].quantity = newQuantity;
    } else {
        updateCartItems.push({
            prodId: new objectId(product._id),
            quantity: newQuantity,
        });
    }
    const updateCart = {
        items: updateCartItems,
    };
    const db = getDb();
    return await db
        .collection("people")
        .updateOne(
            { _id: new objectId(this._id) },
            { $set: { cart: updateCart } }
        );
}
}

module.exports = People;
