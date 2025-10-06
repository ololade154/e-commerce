import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import MaterialSection from '../components/MaterialSection';
import Testimonial from '../components/Testimonial';
function HomePage({ cartItems }) {
  return (
    <main className="main">
      <Hero cartItems={cartItems} />
      <HomeContent />
      <ExperienceSection />
      <MaterialSection />
      <Testimonial />
      <Footer />
    </main>
  );
}
export default HomePage;
