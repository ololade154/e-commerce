import Button from './Button';
import furnitureData from '../Data/FurnitureData';

function Products({ addToCart, searchTerm }) {
  const filteredData =
    searchTerm.trim() === ''
      ? furnitureData.filter((_, index) => index < 15)
      : furnitureData
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((_, index) => index < 15);

  return (
    <div className="products-data">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
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
        ))
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
}

export default Products;
