import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img className="h-full object-contain" src=""alt=""/>
                    </div>
                  </div>
                  <div className="w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">{item.name}</h3>
                    <p className="text-gray-500">Simple Modern</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-red-500 font-bold font-heading">{item.price}</p>
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
            <div className="flex flex-wrap items-center -mx-4"></div>
      {/* <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default CartItem;
