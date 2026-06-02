import FooterBenefitSection from "./FooterBenefitSection";
import FooterLinksSection from "./FooterLinksSection";

export default function Footer() {
  return (
    <footer className="p-4">
      <FooterBenefitSection />
      <FooterLinksSection />
      <section className="mt-4 flex justify-end">
        <span className="justify-self-end text-[0.5rem] font-medium text-gray-600">
          BookStore2026©
        </span>
      </section>
    </footer>
  );
}
