import type { SectionDisplayCardProps } from "../../../../types/SectionDisplayCard";
import { SectionDisplayCard } from "../SectionDisplayCard/SectionDisplayCard";
import "./SectionDisplayCardGrid.css";

type SectionDisplayCardGridProps = {
  cardsData: SectionDisplayCardProps[];
};

export function SectionDisplayCardGrid({
  cardsData,
}: SectionDisplayCardGridProps) {
  return (
    <div className="section-display-cards-grid">
      {cardsData.map((data, index) => (
        <SectionDisplayCard
          Icon={data.Icon}
          title={data.title}
          description={data.description}
          key={index}
        />
      ))}
    </div>
  );
}
