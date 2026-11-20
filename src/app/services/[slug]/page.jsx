import Service from "../../../views/Service";

const SERVICES = {
  "ambulette-services": "Ambulette Services",
  "private-medical-transportation": "Private Medical Transportation",
  "two-men-assist-over-stairs": "Two-Men Assist Over Stairs",
  "medicaid-ambulette-service": "Medicaid Ambulette Service",
  "wheelchair-handicapped-transportation": "Wheelchair & Handicapped Transportation",
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: SERVICES[slug] || "Services" };
}

export default function Page() {
  return <Service />;
}
