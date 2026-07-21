import { SectionInfo } from "../components/SectionInfo/SectionInfo";

export function PopularTechnologiesSection() {
  return (
    <div id="popularTechnologiesSection" className="homepage-section">
      <SectionInfo
        tagline="stack"
        header="Browse by technology"
        description="Filter roles by the tools and languages you already know well."
      />
    </div>
  );
}
