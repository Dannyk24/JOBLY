import type { SectionDisplayCardProps } from "../../../../types/SectionDisplayCard";
import "./SectionDisplayCard.css";

export function SectionDisplayCard({
  Icon,
  title,
  description,
}: SectionDisplayCardProps) {
  return (
    <div className="section-display-card">
      <div className="card-icon">
        <Icon />
      </div>
      <span className="card-title">{title}</span>
      <span className="card-description">{description}</span>
    </div>
  );
}
