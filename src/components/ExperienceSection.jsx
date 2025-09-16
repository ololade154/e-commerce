import { Link } from 'react-router-dom';
import Arrow from './Arrow';
function ExperienceSection() {
  return (
    <div className="experience-section">
      <div className="experience-image">
        <img src="/assets/experience-image.svg" />
      </div>
      <div className="experience-content">
        <h1>Experiences</h1>
        <h2>We Provide You The</h2>
        <h3>Best Experience</h3>
        <p>You don't have to worry about the result because of all of these</p>
        <p>
          interiors are made by people who are professionals in their fields
        </p>
        <p>
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="experience-link">
          <div>
            <Link to="#">More Info</Link>
          </div>
          <div>
            <Arrow width={30} color="#e58411" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExperienceSection;
