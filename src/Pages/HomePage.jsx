import ExperienceSection from '../components/ExperienceSection';
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import MaterialSection from '../components/MaterialSection';

function HomePage() {
  return (
    <main className="main">
      <Hero />
      <HomeContent />
      <ExperienceSection />
      <MaterialSection />
    </main>
  );
}
export default HomePage;
