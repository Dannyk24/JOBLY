import { Cable } from "lucide-react";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={`logo ${className && className}`}>
      <div className="logo-icon">
        <Cable />
      </div>
      <span className="logo-text">Jobly</span>
    </div>
  );
}
