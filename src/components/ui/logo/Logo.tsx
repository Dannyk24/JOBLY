import { Cable } from "lucide-react";
import { Link } from "react-router";
import "./Logo.css";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link className={`logo ${className && className}`} to="/">
      <div className="logo-icon">
        <Cable />
      </div>
      <span className="logo-text">Jobly</span>
    </Link>
  );
}
