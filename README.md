# E-Commerce Store with React, Redux, Firebase, and React Router DOM

This is a modern e-commerce store built using **React**, **Redux**, **Firebase**, and **React Router DOM**. The store allows users to browse products, add them to a shopping cart, authenticate with Firebase, and complete their orders, all while providing a seamless and responsive user experience.

---

## **Features**

- **User Authentication:**  
  Users can sign up, log in, and manage their profiles using **Firebase Authentication**.
  
- **Product Catalog:**  
  View a dynamic list of products fetched from Firebase **Firestore** with filtering and sorting options.

- **Shopping Cart:**  
  Users can add, remove, and modify the quantity of products in their cart, with the cart's state managed globally using **Redux**.

- **Order History:**  
  Users can track their order history, which is stored in Firebase.

- **Routing:**  
  The app uses **React Router DOM** to navigate between different pages like the home page, product details page, cart, and user profile.

- **Real-Time Updates:**  
  Changes to the product catalog, cart, or order status are updated in real-time using Firebase.

---

## **Technologies Used**

- **React:**  
  A JavaScript library for building user interfaces. It’s used to create reusable components for the store.

- **Redux:**  
  State management is handled using Redux, which provides a single source of truth for the application state, including the shopping cart and user authentication.

- **Firebase:**  
  - **Firebase Authentication** for managing user sign-in and sign-up.
  - **Firestore Database** for storing product details, user profiles, and order history.
  - **Firebase Storage** for storing product images and other media.

- **React Router DOM:**  
  Used for client-side routing to navigate between different views of the store (e.g., homepage, product details, cart).

---

## **Setup and Installation**

To run this project locally, follow the steps below:

### **1. Clone the repository**

```bash
git clone https://github.com/your-username/e-commerce-store.git
cd e-commerce-store

npm install
# or
yarn install


npm start
# or
yarn start
```

The application should now be running at http://localhost:3000.
