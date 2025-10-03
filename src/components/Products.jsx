import Button from './Button';
import furnitureData from '../Data/FurnitureData';
function Products({ addToCart }) {
  return (
    <div className="products-data">
      {furnitureData
        .filter((item, index) => index < 15)
        .map((item) => (
          <div key={item.id} className="furniture-item">
            <div>
              <img src={item.src} alt={item.name} />
            </div>
            <div className="furniture-details">
              <p>{item.category}</p>
              <h2>{item.name}</h2>
              <div className="furniture-price">
                <div>
                  <p>{item.price}</p>
                </div>
                <div>
                  <Button onClick={() => addToCart(item)} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Products;
