import React from "react";
import Tabs from "./tabs/tabs";
import Head from "next/head";

export default function FAQ() {
  const faq = [
    {
      id: 0,
      title: "Сколько времени займёт заказ?",
      text: "Желательно заказывать заранее, но мы сможем собрать и доставить букет от 2 часов. По вопросу срочной доставки — пишите или звоните. Сделаем все возможное.",
    },
    {
      id: 1,
      title: "Как и куда осуществляется доставка?",
      text: "По предварительному заказу доставка возможна в любое время суток. Ночная доставка доступна при заказе более чем за 24ч.",
    },

    {
      id: 2,
      title: "Возможн ли добавить сопроводительное письмо к заказу?",
      text: "Да, мы приложим нашу фирменную открытку, на которой напишем текст пожелания вашему близкому человеку.",
    },
    {
      id: 3,
      title: "Какой режим работы?",
      text: "Мы принимаем ваши заказы с 10 до 20 ч. Вы можете оставить заявку в WhatsApp в любое время.",
    },
    {
      id: 4,
      title: "Доставляете ли по Калининградской области?",
      text: "Да, конечно. Стоимость доставки за пределы Калининграда рассчитывается индивидуально, в зависимости от адреса.",
    },
    {
      id: 4,
      title: "Как будет доставляться заказ?",
      text: " Цветы — товар, требующий аккуратности. Курьеры соблюдают все правила обращения с ними. В автомобилях поддерживается температура, благоприятная для букетов.",
    },
    {
      id: 5,
      title: "Как ухаживать за букетом?",
      text: "К каждому заказу мы прикладываем инструкцию с подробными рекомендациями по уходу, а также фирменное средство для продления жизни цветов.",
    },
  ];
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.text.toString(),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />

      <section className={"faq gap container"}>
        <style jsx>{`
          .faq {
            position: relative;
            padding-top: var(--space-big);
            padding-bottom: var(--space-big);
          }

          h2 {
            margin-bottom: var(--space-small);
            grid-column: 1/2;
          }
          @media all and (max-width: 768px) {
            h2 {
              grid-column: 1/4;
            }
          }
        `}</style>
        <h2 className="h2">FAQ</h2>
        <Tabs data={faq} />
      </section>
    </>
  );
}
