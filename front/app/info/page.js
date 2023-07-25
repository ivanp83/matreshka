import Index from "../components/info";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WPHeader",
  title: "Клиентская информация | Цветочный бутик Матрёшка",
  description:
    "На всё есть гарантия и наши букеты не исключение. Условия оплаты и доставки - полная информация для покупателя тут.",
  keywords: "условия оплаты, гарантия, возвраты",
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
