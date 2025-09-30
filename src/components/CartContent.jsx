import CloseIcon from './CloseIcon';

function CartContent() {
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Product </p>
        <div className="header-content">
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
        </div>
      </div>
      <div className="cart-content">
        <div className="item-image">
          <CloseIcon width={20} color="black" />
          <img src="/assets/chair5.svg" className="item" />
          <p>name</p>
        </div>
        <div className="item-price">
          <p>20000</p>
          <p>Sum</p>
          <p>4000</p>
        </div>
      </div>
    </div>
  );
}
export default CartContent;
