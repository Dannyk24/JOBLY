import "./SectionDisplayCard.css";
import type { SectionCardData } from "../../../../types/SectionDisplayCard";

type SectionDisplayCardProps = SectionCardData & {
  //Extends the SectionCardData and allows us to add additional properties e.g cardType
  cardType: "default" | "information";
};

export function SectionDisplayCard({
  Icon,
  title,
  description,
  cardType,
}: SectionDisplayCardProps) {
  return (
    <div className="section-display-card">
      <div className={`card-icon ${cardType}-card-icon`}>
        <Icon />
      </div>
      <span className="card-title">{title}</span>
      <span className="card-description">{description}</span>
    </div>
  );
}
