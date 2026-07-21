import {
  Brain,
  Brush,
  ChartCandlestick,
  CodeXml,
  Container,
  Database,
  Smartphone,
  SquareChartGantt,
} from "lucide-react";
import { SectionDisplayCardGrid } from "../components/SectionDisplayCardGrid/SectionDisplayCardGrid";
import "./PopularCategoriesSection.css";
import { SectionInfo } from "../components/SectionInfo/SectionInfo";

export function PopularCategoriesSection() {
  const popularJobCategoriesData = [
    {
      Icon: CodeXml,
      title: "Software engineering",
      description: "Backend, frontend, and full-stack roles at every level.",
    },
    {
      Icon: Database,
      title: "Data Science",
      description: "Analytics, ML, and data engineering positions.",
    },
    {
      Icon: Brush,
      title: "UI/UX Design",
      description: "Product, visual, and interaction design roles.",
    },
    {
      Icon: Smartphone,
      title: "Mobile Development",
      description: "iOS, Android, and cross-platform engineering.",
    },
    {
      Icon: Container,
      title: "DevOps",
      description: "Infrastructure, platform, and reliability roles.",
    },
    {
      Icon: Brain,
      title: "AI & Machine Learning",
      description: "Applied research and production ML roles.",
    },
    {
      Icon: ChartCandlestick,
      title: "Marketing",
      description: "Growth, content, and brand marketing positions.",
    },
    {
      Icon: SquareChartGantt,
      title: "Product Management",
      description: "Product strategy and cross-functional leadership.",
    },
  ];

  return (
    <section id="popular-categories-section" className="homepage-section">
      <SectionInfo
        tagline="explore"
        header="Browse by cateogry"
        description="Whatever you're great at, there's a team out there looking for exactly that."
      />
      <SectionDisplayCardGrid cardsData={popularJobCategoriesData} />
    </section>
  );
}
