import { HeroSection } from "../HeroSection/HeroSection";
import { PopularCategoriesSection } from "../PopularCategories/PopularCategoriesSection";
import { TrustedCompaniesSection } from "../TrustedCompanies/TrustedCompaniesSection";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="app-page homepage">
      <HeroSection />
      <TrustedCompaniesSection />
      <PopularCategoriesSection />
    </div>
  );
}

export default HomePage;
