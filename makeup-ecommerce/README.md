# React + Vite + Firebase Makeup Online Shop
A simple ecommerce web application built with the latest [reactjs](https://react.dev/) as front end framework, [tailwind css](https://tailwindcss.com/docs/installation) for styling, [Redux](https://redux.js.org/) as global state manager, and [Firebase](https://firebase.google.com/docs/) firestore for persistent storage of products and orders.

## System Design 

### Requirements 
#### What are the core features supported?
- Browse the listed makeup products
- View the details of a product
- Add an item to cart
- Create an order with current cart

#### What are the pages in the website? 
- Home page with marketing and product listing 
- Product Details page
- Cart Page 
- Checkout Page

#### What devices can you open the website with?
- Mobile web
- Laptop

### High Level Architecture

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/ecommerceArchitecture.png)

- FireBase: Provides image storage and document oriented datastore for products and orders
- Controller: Controls actions, data flow and state changes within the application
- Redux store: manages the global state of the application


### Data Model

| Entity  | Fields |
| ------------- | ------------- |
| `Products`  | list of `products`  |
| `Product`  | title, ratings, price, info(description, img, ingredients), img, alt, ad  |
|`Orders`| status, userInfo(address, cart, email, first_name, last_name, phone)|
| `Cart`| products, total|


## Demo

### Deployed Link
[juliet's beauty website](https://makeupecommerce.vercel.app/)
### Home page
![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/Vite%20%2B%20React.gif)


### Product detail page
![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/product-detail.gif)

### Cart
![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/add-cart.gif)

### Error Handling
![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/error-handling.gif)

### Checkout Form
![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/checkout.gif)


## Usage

To run this application on your local machine.
- Clone this repository in a directory of your choice
- cd into makeup-ecommerce and run npm install
- setup a firebase project and a firestore database
- edit data/productUpload.js and api/firebase.js to match your firebase config
- run npm run dev 