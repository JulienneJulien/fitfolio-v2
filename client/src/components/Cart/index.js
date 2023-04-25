import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // If so, invoke the getCart method and populate the cart with the existing from the session
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    // <div className="cart">
    //   <div className="close" onClick={toggleCart}>
    //     [close]
    //   </div>
    //   <h2>Shopping Cart</h2>
    //   {state.cart.length ? (
    //     <div>
    //       {state.cart.map((item) => (
    //         <CartItem key={item._id} item={item} />
    //       ))}

    //       <div className="flex-row space-between">
    //         <strong>Total: ${calculateTotal()}</strong>

    //         {/* Check to see if the user is logged in. If so render a button to check out */}
    //         {Auth.loggedIn() ? (
    //           <button onClick={submitCheckout}>Checkout</button>
    //         ) : (
    //           <span>(log in to check out)</span>
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>
    //       <span role="img" aria-label="shocked">
    //         😱
    //       </span>
    //       You haven't added anything to your cart yet!
    //     </h3>
    //   )}
    // </div>
    <section className="py-20 bg-orange-200">
  <div className="container mx-auto px-4">
    <div className="p-8 lg:p-20 bg-white">
      <h2 className="mb-20 text-5xl font-bold text-gray-700 font-heading">Your cart</h2>
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
          <div className="hidden lg:flex w-full">
            <div className="w-full lg:w-3/6">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Description</h4>
            </div>
            <div className="w-full lg:w-1/6">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Price</h4>
            </div>
            <div className="w-full lg:w-1/6 text-center">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Quantity</h4>
            </div>
            <div className="w-full lg:w-1/6 text-right">
              <h4 className="mb-6 font-bold font-heading text-gray-700">Subtotal</h4>
            </div>
          </div>
          <div className="mb-12 py-6 border-t border-b border-gray-200">
            <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img className="h-full object-contain" src="yofte-assets/images/waterbottle.png" alt=""/>
                    </div>
                  </div>
                  <div className="w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">24oz Bottle</h3>
                    <p className="text-gray-500">Simple Modern</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-red-500 font-bold font-heading">$29.89</p>
                <span className="text-xs text-gray-500 line-through">$33.69</span>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md">
                  <button className="py-2 hover:text-gray-700">
                    <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                  </button>
                  <input className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1"/>
                  <button className="py-2 hover:text-gray-700">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                  </button>
                </div>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img className="h-full object-contain" src="yofte-assets/images/basketball.png" alt=""/>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">Steph Curry limited edition basketball</h3>
                    <p className="text-gray-500">Spalding</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-red-500 font-bold font-heading">$29.89</p>
                <span className="text-xs text-gray-500 line-through">$33.69</span>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  <button className="py-2 hover:text-gray-700">
                    <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                  </button>
                  <input className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1"/>
                  <button className="py-2 hover:text-gray-700">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                  </button>
                </div>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:-mb-4">
            <span className="mr-12 mb-4 font-medium">Apply discount code:</span>
            <input className="flex-1 md:flex-none mr-6 sm:mr-0 md:mr-6 mb-4 px-8 py-4 placeholder-gray-800 font-bold font-heading border rounded-md" type="text" placeholder="Fit30"/>
            <a className="flex-1 md:flex-none inline-block mb-4 px-8 py-4 text-center text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md" href="#">Apply</a>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="p-6 md:p-12 bg-gray-700">
            <h2 className="mb-6 text-4xl font-bold font-heading text-white">Cart totals</h2>
            <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-xl font-bold font-heading text-white">$89.67</span>
            </div>
            <h4 className="mb-2 text-xl font-bold font-heading text-white">Shipping</h4>
            <div className="flex mb-2 justify-between items-center">
              <span className="text-gray-500">Next day</span>
              <span className="text-xl font-bold font-heading text-white">$11.00</span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-gray-500">Shipping to United States</span>
              <span className="text-xl font-bold font-heading text-white">-</span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-xl font-bold font-heading text-white">Order total</span>
              <span className="text-xl font-bold font-heading text-white">$100.67</span>
            </div>
            <a className="block w-full py-4 bg-orange-300 hover:bg-orange-400 hover:text-gray-700 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" href="#">Go to Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};


export default Cart;
