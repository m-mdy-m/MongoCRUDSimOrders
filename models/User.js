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
    const db = getDb();
    if (!this.cart) {
      this.cart = { Selected_Products: [] };
    }
    const carts = this.cart.Selected_Products;
    const cartsIndex = carts.findIndex((select) => {
      return select.prodId.toString() === product._id.toString();
    });
    let baseQty = 1;
    let UpCart = [...carts];
    if (cartsIndex >= 0) {
      baseQty = carts[cartsIndex].qty + 1;
      UpCart[cartsIndex].qty = baseQty;
    } else {
      UpCart.push({
        prodId: new objectId(product._id),
        qty: baseQty,
      });
    }
    const updateCart = {
      Selected_Products: UpCart,
    };

    return db
      .collection("users")
      .updateOne({ _id: new objectId(product._id) }, { cart: { updateCart } });
  }
}

module.exports = User;
