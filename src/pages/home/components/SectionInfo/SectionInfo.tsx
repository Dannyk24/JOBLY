import "./SectionInfo.css";

type SectionInfoProps = {
  tagline: string;
  header: string;
  description: string;
};

export function SectionInfo({
  tagline,
  header,
  description,
}: SectionInfoProps) {
  return (
    <div className="section-info-container">
      <span className="section-tagline">{tagline}</span>
      <span className="section-header">{header}</span>
      <p className="section-description">{description}</p>
    </div>
  );
}
