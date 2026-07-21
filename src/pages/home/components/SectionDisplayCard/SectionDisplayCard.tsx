import type { SectionDisplayCardProps } from "../../../../types/SectionDisplayCard";
import "./SectionDisplayCard.css";

export function SectionDisplayCard({
  Icon,
  title,
  description,
  cardType,
}: SectionDisplayCardProps) {
  return (
    <div className="section-display-card">
      <div
        className={cardType ? `card-icon ${cardType}-card-icon` : "card-icon"}
      >
        <Icon />
      </div>
      <span className="card-title">{title}</span>
      <span className="card-description">{description}</span>
    </div>
  );
}
