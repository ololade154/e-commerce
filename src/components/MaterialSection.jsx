import { Link } from 'react-router-dom';
import Arrow from './Arrow';
function MaterialSection() {
  return (
    <div className="material-section">
      <div className="material-content">
        <h1>Materials</h1>
        <h2>Very Serious</h2>
        <h3>Materials For Making</h3>
        <h4>Furniture</h4>
        <p>Because panto was very serious about designing furniture for our </p>
        <p>environment,using a very expensive and famous capital but at a</p>
        <p>relatively low price</p>
        <div className="material-link">
          <div>
            <Link to="#">More Info</Link>
          </div>
          <div>
            <Arrow width={30} color="#e58411" />
          </div>
        </div>
      </div>
      <div className="material-images">
        <div className="material-image-left">
          <div>
            <img src="/assets/image-left1.svg" />
          </div>
          <div>
            <img src="/assets/image-left2.svg" />
          </div>
        </div>
        <div className="material-image-right">
          <img src="/assets/image-right.svg" />
        </div>
      </div>
    </div>
  );
}
export default MaterialSection;
