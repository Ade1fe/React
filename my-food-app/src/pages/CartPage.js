import React from 'react';
import MainLayout from "../layouts/MainLayout";
// import ItemCounter from '../components/ItemCounter';

const CartPage = () => {
  // Retrieve the cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        {/* <ItemCounter /> */}
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt={item.title} className="w-12 h-12" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
