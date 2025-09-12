import HeroContent from './HeroContent';
import NavBar from './NavBar';
import Input from './Input';
function Hero() {
  return (
    <div className="hero">
      <NavBar />
      <HeroContent />
      <Input />
    </div>
  );
}
export default Hero;
