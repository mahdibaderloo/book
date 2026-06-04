import FooterBenefitSection from "./FooterBenefitSection";
import FooterCopyrightSection from "./FooterCopyrightSection";
import FooterLinksSection from "./FooterLinksSection";

export default function Footer() {
  return (
    <footer className="p-4">
      <FooterBenefitSection />
      <FooterLinksSection />
      <FooterCopyrightSection />
    </footer>
  );
}
