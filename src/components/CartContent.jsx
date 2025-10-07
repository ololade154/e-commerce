import CloseIcon from './CloseIcon';

function CartContent({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Product</p>
        <div className="header-content">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>No item in cart yet </p>
        </div>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-content">
            <div className="item-image">
              <CloseIcon
                width={20}
                color="black"
                onClick={() => removeFromCart(index)}
              />
              <img src={item.src} alt={item.name} className="item" />
              <p>{item.name}</p>
            </div>
            <div className="item-price">
              <p>{item.price}</p>
              <div className="quantity-buttons">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <p>{item.price * item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default CartContent;
