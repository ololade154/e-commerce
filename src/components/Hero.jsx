import HeroContent from './HeroContent';
import NavBar from './NavBar';
// import Input from './Input';
function Hero({ cartItems }) {
  return (
    <div className="hero">
      <NavBar cartItems={cartItems} />
      <HeroContent />
      {/* <Input /> */}
    </div>
  );
}
export default Hero;
