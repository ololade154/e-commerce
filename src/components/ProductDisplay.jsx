import furnitureData from '../Data/FurnitureData';
import Button from './Button';
function ProductDisplay() {
  return (
    <div className="product-display">
      <h1>Best Selling Product</h1>
      <div className="display-content">
        <div>
          <span>Chair</span>
        </div>
        <div>
          <span>Beds</span>
        </div>
        <div>
          <span>Sofa</span>
        </div>
        <div>
          <span>Lamps</span>
        </div>
      </div>
      <div className="furniture-data">
        {furnitureData
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id} className="furniture-item">
              <div>
                <img src={item.src} alt={item.name} width="140" />
              </div>
              <div className="furniture-details">
                <p>{item.category}</p>
                <h2>{item.name}</h2>
                <div className="furniture-price">
                  <div>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ProductDisplay;
