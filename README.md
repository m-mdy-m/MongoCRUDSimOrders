# MongoCRUDSimOrders

## Introduction

MongoCRUDSimOrders is a full-stack web application designed for creating a simulated e-commerce experience. Utilizing technologies such as Node.js, Express.js, MongoDB, and EJS for templating, it enables users to interact seamlessly with the online shopping interface, manage a shopping cart, and simulate the order placement process. Additionally, it offers an administrative panel for the management of products.

## Features

- **Home (`/`):** A storefront where users can browse and add products to their cart.
- **Cart (`/cart`):** Users can update the quantity of products or remove them from the cart.
- **Orders (`/orders`):** After placing an order, users can view their order history.
- **Add Product (`/add-product`):** Allows admins to list new products which then appear on the home page.
- **Dashboard (`/dashboard`):** An admin-exclusive area for product modification or deletion.

## User Relationship Mapping

- **One-to-One:** Users have their own individual carts, exemplifying a one-to-one correspondence between users and carts.
- **One-to-Many:** A user can be associated with multiple orders, establishing a one-to-many link.
- **Many-to-One:** Each order may contain several products, but originates from a single user, creating a many-to-one connection.
- **Many-to-Many:** Multiple users may have the same product in their carts, and each user's cart can contain various products, demonstrating a many-to-many relationship.

## User Guide

**Browsing Products:** Access the home page at the `/` path to view and add products to the cart.

**Managing Cart:** By navigating to the `/cart` page, you can adjust quantities or remove products from the cart.

**Placing an Order:** After finalizing your cart items, click ‘Place Order’ to simulate the purchase and review this in the `/orders` section.

**Adding a New Product:** Admins can add new products to the storefront via the `/add-product` path.

**Admin Dashboard:** The `/dashboard` is for admins to manage existing product listings through edit and delete options.

## Technology Stack

- **Frontend:** EJS (Embedded JavaScript templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Development:** Nodemon for auto-reloading

## Installation and Setup

Before you begin, make sure you have Node.js and MongoDB installed on your local machine.
1. **Clone the repository:**
```bash
git clone https://github.com/m-mdy-m/MongoCRUDSimOrders.git
```

2. **Change directory:**
```bash
cd MongoCRUDSimOrders
```
3. **Install dependencies:**
```bash
npm install
```
4. **Start the server:**
```bash
npm run start   # or use `nodemon` if you have it installed for development purposes.
```
5. **Access the application** at http://localhost:3000.

## Database Relationships

This section outlines the relationships between different data entities within the MongoDB database.

### Products

- **Standalone Documents:** Each `product` is an independent document within the `products` collection.

### Users and Carts

- **One-to-One**: Every `user` has a unique `cart`. The `users` collection houses user documents, each containing a nested cart structure specifying `selected_products`, with each entry holding a reference to a `product` and its corresponding `quantity`.

### Orders

- **User-Cart One-to-One**: When an order is placed, a one-to-one relationship is created between that `order` and the user's `cart`. The items within the cart are copied over to the newly created `order` document in the `orders` collection, after which the cart is cleared to reflect that the transaction has been completed.

### Admin Product Management

- **One-to-Many**: An admin user has a one-to-many relationship with `products`. An admin is capable of creating, updating, or deleting multiple product entries within the `products` collection.
## License

This project is licensed under the terms of the [MIT LICENSE](https://github.com/m-mdy-m/MongoCRUDSimOrders/blob/main/LICENSE)

## Contributing

Follow these steps to contribute:
1. Fork the repository on GitHub.
2. Create a new branch off the main branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`).
4. Push your branch to GitHub (`git push origin feature/AmazingFeature`).
5. Create a new Pull Request against the main MongoCRUDSimOrders repository.
