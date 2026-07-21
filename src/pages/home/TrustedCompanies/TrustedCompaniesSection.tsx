import "./TrustedCompaniesSection.css";

export function TrustedCompaniesSection() {
  const trustedCompanies = [
    { id: 1, name: "stripe" },
    { id: 2, name: "linear" },
    { id: 3, name: "vercel" },
    { id: 4, name: "notion" },
    { id: 5, name: "figma" },
    { id: 6, name: "ramp" },
  ];
  return (
    <section id="trusted-companies-section" className="homepage-section">
      <h2>trusted by teams at</h2>
      <div className="trusted-companies-grid">
        {trustedCompanies.map((company) => (
          <span className="trusted-company" key={company.id}>
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
