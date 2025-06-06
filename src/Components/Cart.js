import { useDispatch, useSelector } from "react-redux";
import { addItems, emptyCart, removeItem } from "../utils/cartSlice";
import { useState, useEffect } from "react";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * 149,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  const handleRemoveItem = (itemObj) => {
    // console.log("item to be removed", itemObj);

    dispatch(removeItem(itemObj));
  };

  const handleAddItem = (itemObj) => {
    // console.log("item to be add", itemObj);
    dispatch(addItems(itemObj));
  };

  const handlePayment = (amount) => {
    // Placeholder for payment processing
    alert(`Processing payment of ₹${amount}. This is a demo - no actual payment will be processed.`);
  };

  return (
    <main className="cart-component" role="main" aria-label="Shopping cart">
      <h1 role="heading" aria-level="1">Your Cart Items</h1>
      {cartItems.length === 0 ? (
        <section role="region" aria-label="Empty cart message">
          <p>Sorry, Your cart is empty.</p>
          <p>Add some items and comeback later</p>
        </section>
      ) : (
        <section role="region" aria-label="Cart items list">
          <ul role="list" aria-label={`Shopping cart with ${cartItems.length} different items`}>
            {cartItems.map((itemObj) => (
              <li key={itemObj.id} className="cart-item" role="listitem">
                <div 
                  className="cart-item-name"
                  role="text"
                  aria-label={`${itemObj.name}, quantity: ${itemObj.quantity}`}
                >
                  {itemObj.name + " "} X {" " + itemObj.quantity}
                </div>
                <div role="text" aria-label={`Price: ${149 * itemObj.quantity} rupees`}>
                  {149 * itemObj.quantity}₹
                </div>
                <button 
                  onClick={() => handleRemoveItem(itemObj)}
                  aria-label={`Remove one ${itemObj.name} from cart`}
                  title="Remove one item"
                >
                  -
                </button>
                <button 
                  onClick={() => handleAddItem(itemObj)}
                  aria-label={`Add one more ${itemObj.name} to cart`}
                  title="Add one more item"
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="cart-total" role="region" aria-label="Cart total">
        <h2 role="heading" aria-level="2" aria-live="polite">Total: {totalPrice} ₹ </h2>
      </div>
      <div className="cart-bottom-buttons" role="group" aria-label="Cart actions">
        {cartItems.length > 0 && (
          <>
            <button 
              onClick={handleClearCart}
              aria-label="Clear all items from cart"
              role="button"
            >
              Clear the Cart
            </button>
            <button 
              onClick={()=>handlePayment(totalPrice)}
              aria-label={`Proceed to payment for ${totalPrice} rupees`}
              role="button"
            >
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
