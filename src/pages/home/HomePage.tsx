import { HeroSection } from "./HeroSection/HeroSection";
import { PopularCategoriesSection } from "./PopularCategories/PopularCategoriesSection";
import { TrustedCompaniesSection } from "./TrustedCompanies/TrustedCompaniesSection";
import "./HomePage.css";
import { PopularTechnologiesSection } from "./PopularTechnologies/PopularTechnologiesSection";
import { FeaturesSection } from "./Features/FeaturesSection";
import { TrustedPublishersSection } from "./TrustedPublishers/TrustedPublishersSection";

function HomePage() {
  return (
    <div className="app-page homepage">
      <HeroSection />
      <TrustedCompaniesSection />
      <PopularCategoriesSection />
      <PopularTechnologiesSection />
      <FeaturesSection />
      <TrustedPublishersSection />
    </div>
  );
}

export default HomePage;
