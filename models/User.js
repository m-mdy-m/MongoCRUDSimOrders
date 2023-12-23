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
    const cartsIndex = carts.findIndex((selected) => {
      return selected.prodId.toString() === product._id.toString();
    });
    const upCart = [...carts];
    var baseQty = 1;
    if (cartsIndex >= 0) {
      baseQty = carts[cartsIndex].qty + 1;
      upCart[cartsIndex].qty = baseQty;
    } else {
      upCart.push({
        prodId: new objectId(product._id),
        qty: baseQty,
      });
    }
    const updateCart = {
      Selected_Products: upCart,
    };
    return db
      .collection("users")
      .updateOne(
        { _id: new objectId(this._id) },
        { $set: { cart: updateCart } }
      );
  }
  async getCart() {
    const db = getDb();
    const carts = this.cart.Selected_Products;
    const prodId = carts.map((p) => {
      return p.prodId;
    });
    const products = await db
      .collection("Product")
      .find({ _id: { $in: prodId } })
      .toArray();
    return products.map((p) => {
      const qty = carts.find(
        (qty) => qty.prodId.toString() === p._id.toString()
      ).qty;
      return { ...p, qty: qty };
    });
  }
  async deleteCart(id) {
    const db = getDb();
    const carts = this.cart.Selected_Products;
    const update = carts.filter((i) => {
      console.log("i =>", i);
      console.log("i.prodId =>", i.prodId);
      return i.prodId.toString() !== id.toString();
    });
    return await db
      .collection("users")
      .updateOne(
        { _id: new objectId(this._id) },
        { $set: { cart: { Selected_Products: update } } }
      );
  }
  async addOrder() {
    const db = getDb();
    const productsCart = await this.getCart();
    console.log(productsCart);
    const Order = {
      Product: productsCart,
      user: {
        _id: new objectId(this._id),
        name: this.username,
      },
    };
    try {
      await db.collection("orders").insertOne(Order);
      this.cart = await { Selected_Products: [] };
      await db
        .collection("users")
        .updateOne(
          { _id: new objectId(this._id) },
          { $set: { cart: { Selected_Products: [] } } }
        );
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = User;
