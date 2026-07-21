import { Briefcase, Globe, Search, Zap } from "lucide-react";
import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { SectionDisplayCardGrid } from "../components/SectionDisplayCardGrid/SectionDisplayCardGrid";

export function FeaturesSection() {
  const features = [
    {
      Icon: Zap,
      title: "Fast Job Search",
      description:
        "An interface built for speed search, filter, and browse thousands of roles without a single loading spinner in sight.",
    },
    {
      Icon: Globe,
      title: "Worldwide Opportunities",
      description:
        "Roles from over 6,000 companies across 40+ countries remote, hybrid, and on-site, all in one place.",
    },
    {
      Icon: Search,
      title: "Powerful Search & Filtering",
      description:
        "Filter by salary, seniority, remote policy, and stack to get to roles that actually match what you want.",
    },
    {
      Icon: Briefcase,
      title: "Apply Through Trusted Publishers",
      description:
        "Every listing links directly to the company's own careers page no third-party forms, no spam.",
    },
  ];
  return (
    <div id="features-section" className="homepage-section">
      <SectionInfo
        tagline="why jobly"
        header="Built for people who value their time"
        description="Every detail is designed to get you to the right opportunity, faster."
      />
      <SectionDisplayCardGrid cardsData={features} cardType="information" />
    </div>
  );
}
