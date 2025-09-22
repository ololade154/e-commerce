// function Inputs({ placeholder }) {
//   return (
//     <div>
//       <input placeholder={placeholder}></input>
//     </div>
//   );
// }
// export default Inputs;
import Cart from './cart';
function Inputs({
  placeholder,
  width,
  height,
  type = 'text',
  showCart = false, // show Cart icon
  cartWidth = 22, // width of the cart
  cartColor = 'black', // color of the cart
  onCartClick, // optional click handler
}) {
  return (
    <div
      className={`input-container ${showCart ? 'with-icon' : ''}`}
      style={{ width: width || '100%' }}
    >
      <input
        className="custom-input"
        placeholder={placeholder}
        type={type}
        style={{ height: height || '40px' }}
      />
      {showCart && (
        <div className="input-icon">
          <Cart width={cartWidth} color={cartColor} onClick={onCartClick} />
        </div>
      )}
    </div>
  );
}

export default Inputs;
