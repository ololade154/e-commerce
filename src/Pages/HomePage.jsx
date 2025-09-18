import ExperienceSection from '../components/ExperienceSection';
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import MaterialSection from '../components/MaterialSection';
import Testimonial from '../components/Testimonial';

function HomePage() {
  return (
    <main className="main">
      <Hero />
      <HomeContent />
      <ExperienceSection />
      <MaterialSection />
      <Testimonial />
    </main>
  );
}
export default HomePage;
