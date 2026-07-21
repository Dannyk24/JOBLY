import type { SectionDisplayCardProps } from "../../../../types/SectionDisplayCard";
import { SectionDisplayCard } from "../SectionDisplayCard/SectionDisplayCard";
import "./SectionDisplayCardGrid.css";

type SectionDisplayCardGridProps = {
  cardsData: SectionDisplayCardProps[];
  cardType?: string;
};

export function SectionDisplayCardGrid({
  cardsData,
  cardType,
}: SectionDisplayCardGridProps) {
  return (
    <div className="section-display-cards-grid">
      {cardsData.map((data, index) => (
        <SectionDisplayCard
          Icon={data.Icon}
          title={data.title}
          description={data.description}
          key={index}
          cardType={cardType}
        />
      ))}
    </div>
  );
}
