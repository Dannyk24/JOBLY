import { HeroSection } from "../HeroSection/HeroSection";
import { TrustedCompaniesSection } from "../TrustedCompanies/TrustedCompaniesSection";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="app-page homepage">
      <HeroSection />
      <TrustedCompaniesSection />
    </div>
  );
}

export default HomePage;
