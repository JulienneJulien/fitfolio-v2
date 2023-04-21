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
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {/* Check to see if the user is logged in. If so render a button to check out */}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

<section class="py-20 bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="px-4 py-16 md:py-28 lg:px-20 bg-white">
      <h2 class="mb-8 text-5xl font-bold font-heading">Thanks for ordering</h2>
      <p class="mb-16 text-gray-500">Your payment went through</p>
      <div class="flex flex-wrap mb-8 pb-4 border-b">
        <div class="mr-20">
          <h3 class="text-gray-600">Order Number</h3>
          <p class="text-blue-300 font-bold font-heading">XYZ0864395</p>
        </div>
        <div class="mr-auto">
          <h3 class="text-gray-600">Date</h3>
          <p class="text-blue-300 font-bold font-heading">June 05, 2021</p>
        </div>
        <a class="inline-flex mt-6 lg:mt-0 w-full lg:w-auto justify-center items-center py-4 px-6 border hover:border-gray-500 rounded-md font-bold font-heading" href="#">
          <svg width="16" height="20" viewbox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V0.25C0.585786 0.25 0.25 0.585786 0.25 1L1 1ZM15 19V19.75C15.4142 19.75 15.75 19.4142 15.75 19H15ZM1 19H0.25C0.25 19.4142 0.585786 19.75 1 19.75L1 19ZM10 1L10.5303 0.46967C10.3897 0.329018 10.1989 0.25 10 0.25V1ZM15 6H15.75C15.75 5.80109 15.671 5.61032 15.5303 5.46967L15 6ZM15 18.25H1V19.75H15V18.25ZM1.75 19V1H0.25V19H1.75ZM1 1.75H10V0.25H1V1.75ZM14.25 6V19H15.75V6H14.25ZM9.46967 1.53033L14.4697 6.53033L15.5303 5.46967L10.5303 0.46967L9.46967 1.53033ZM8.25 1V5H9.75V1H8.25ZM11 7.75H15V6.25H11V7.75ZM8.25 5C8.25 6.51878 9.48122 7.75 11 7.75V6.25C10.3096 6.25 9.75 5.69036 9.75 5H8.25Z" fill="black"></path>
          </svg>
          <span class="ml-4">View Invoice</span>
        </a>
      </div>
      <div class="flex flex-wrap -mx-4 mb-8">
        <div class="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div class="flex items-center justify-center h-72 bg-gray-100">
            <img class="h-64 object-cover" src="yofte-assets/images/waterbottle.png" alt=""/>
          </div>
        </div>
        <div class="w-full lg:w-5/6 px-4">
          <div class="flex mb-16">
            <div class="mr-auto">
              <h3 class="text-xl font-bold font-heading">BRILE water filter carafe</h3>
              <p class="text-gray-500">Maecenas 0.7 commodo sit</p>
            </div>
            <span class="text-2xl font-bold font-heading text-blue-300">$29.89</span>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Delivery Address</h4>
              <p class="text-gray-500">Morgan S Hembree</p>
              <p class="text-gray-500">4767 Woodland Terrace</p>
              <p class="text-gray-500">California, CA 95821</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Shipping Informations</h4>
              <p class="text-gray-500">morgan@shuffleux.com</p>
              <p class="text-gray-500">916-971-2145</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10">
              <h4 class="mb-6 font-bold font-heading">Payment Informations</h4>
              <p class="text-gray-500">Mastercard</p>
              <p class="text-gray-500">Ending with 4242</p>
              <p class="text-gray-500">Expires 02 / 28</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 mb-8">
        <div class="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div class="flex items-center justify-center h-72 bg-gray-100">
            <img class="h-64 object-cover" src="yofte-assets/images/basketball.png" alt=""/>
          </div>
        </div>
        <div class="w-full lg:w-5/6 px-4">
          <div class="flex mb-16">
            <div class="mr-auto">
              <h3 class="text-xl font-bold font-heading">NIKE Basketball Ball</h3>
              <p class="text-gray-500">Lorem ipsum dolor size L</p>
            </div>
            <span class="text-2xl font-bold font-heading text-blue-300">$29.89</span>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Delivery Address</h4>
              <p class="text-gray-500">Morgan S Hembree</p>
              <p class="text-gray-500">4767 Woodland Terrace</p>
              <p class="text-gray-500">California, CA 95821</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Shipping Informations</h4>
              <p class="text-gray-500">morgan@shuffleux.com</p>
              <p class="text-gray-500">916-971-2145</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10">
              <h4 class="mb-6 font-bold font-heading">Payment Informations</h4>
              <p class="text-gray-500">Mastercard</p>
              <p class="text-gray-500">Ending with 4242</p>
              <p class="text-gray-500">Expires 02 / 28</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 mb-8">
        <div class="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div class="flex items-center justify-center h-72 bg-gray-100">
            <img class="h-64 object-cover" src="yofte-assets/images/backpack.png" alt=""/>
          </div>
        </div>
        <div class="w-full lg:w-5/6 px-4">
          <div class="flex mb-16">
            <div class="mr-auto">
              <h3 class="text-xl font-bold font-heading">Backpack Travel</h3>
              <p class="text-gray-500">Maecenas commodo libero ut molestie dictum. Morbi placerat eros id porttitor sagittis.</p>
            </div>
            <span class="text-2xl font-bold font-heading text-blue-300">$29.89</span>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Delivery Address</h4>
              <p class="text-gray-500">Morgan S Hembree</p>
              <p class="text-gray-500">4767 Woodland Terrace</p>
              <p class="text-gray-500">California, CA 95821</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10 mb-6 lg:mb-0">
              <h4 class="mb-6 font-bold font-heading">Shipping Informations</h4>
              <p class="text-gray-500">morgan@shuffleux.com</p>
              <p class="text-gray-500">916-971-2145</p>
            </div>
            <div class="w-full lg:w-auto px-4 md:px-10">
              <h4 class="mb-6 font-bold font-heading">Payment Informations</h4>
              <p class="text-gray-500">Mastercard</p>
              <p class="text-gray-500">Ending with 4242</p>
              <p class="text-gray-500">Expires 02 / 28</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div class="py-3 px-10 bg-gray-100 rounded-full">
          <div class="flex justify-between">
            <span class="font-bold font-heading">Subtotal</span>
            <span class="font-bold font-heading">$89.67</span>
          </div>
        </div>
        <div class="py-3 px-10 rounded-full">
          <div class="flex justify-between">
            <span class="font-bold font-heading">Shipping</span>
            <span class="font-bold font-heading">$11.00</span>
          </div>
        </div>
        <div class="py-3 px-10 bg-gray-100 rounded-full">
          <div class="flex justify-between">
            <span class="font-bold font-heading">Tax</span>
            <span class="font-bold font-heading">$0.00</span>
          </div>
        </div>
        <div class="py-3 px-10 rounded-full">
          <div class="flex justify-between">
            <span class="text-base md:text-xl font-bold font-heading">Order Total</span>
            <span class="font-bold font-heading">$100.67</span>
          </div>
        </div>
      </div>
      <div class="text-right"><a class="inline-block w-full md:w-auto text-center px-8 py-4 bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading uppercase rounded-md transition duration-200" href="#">Go back Shopping</a></div>
    </div>
  </div>
</section>
export default Cart;
