import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
//need to add description and category to product item card.
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
        <div className="p-6 bg-orange-50">
          {/* <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span> */}
          <Link to={`/products/${_id}`}>
            <img alt={name} src={`/images/${image}`}/>
            <p>{name}</p>
            </Link>
            <div>
              <div>{quantity} {pluralize("item", quantity)} in stock</div>
              <span>${price}</span>
            </div>
    
         
          {/* <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#"> */}
            {/* <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
          </a> */}
          <button onClick={addToCart}>Add to cart</button>
        </div>
        </div>
  
  );
}

export default ProductItem;

//<div className="card px-1 py-1">
    //    <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>{quantity} {pluralize("item", quantity)} in stock</div>
    //     <span>${price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>
