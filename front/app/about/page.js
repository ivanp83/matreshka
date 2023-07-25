import Index from "../components/about";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WPHeader",
  title: "Наша история | Цветочный бутик Матрёшка",
  description:
    "Как хобби стало любимым делом. История создания интернет-магазина Матрёшка.",
};

export default function Page() {
  return (
    <>
      <Index />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
