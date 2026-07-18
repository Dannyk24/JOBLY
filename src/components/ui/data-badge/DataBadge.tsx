import "./DataBadge.css";

type DataBadgeProps = {
  item: string;
};

export function DataBadge({ item }: DataBadgeProps) {
  return <div className="data-badge">{item}</div>;
}
