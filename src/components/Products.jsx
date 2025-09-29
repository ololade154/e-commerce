import Button from './Button';
import furnitureData from '../Data/FurnitureData';
function Products() {
  return (
    <div className="products-data">
      {furnitureData
        .filter((item, index) => index < 15)
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
  );
}
export default Products;
