"use client";

import React, { useRef } from "react";
import SubNav from "../sub-nav";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// const Loader = dynamic(() => import("../loader"), { ssr: false });
const Gallery = dynamic(() => import("./gallery"), {});
const CanvasBanner = dynamic(() => import("./canvas-banner"), { ssr: false });

export default function Index({ categories, products }) {
  const json = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
            name: `Главная`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "",
            url: "",
            name: "Категории",
          },
        },
        {
          "@type": "ListItem",
          position: 3,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
            name: `About`,
          },
        },
        {
          "@type": "ListItem",
          position: 4,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
            name: `Информация`,
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
            name: "Контакты",
          },
        },
      ],
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <style jsx>{`
        .categories {
          height: 100%;
          align-items: start;
        }
        .heading {
          grid-column: 1/4;
          grid-row: 1;
          padding: 10px;
          margin-bottom: var(--space-small);
          background: var(--main-pink);
          border-radius: 40px;
        }

        .markq {
          display: flex;
          align-items: center;
          height: 1rem;
          overflow: hidden;
        }

        .scroll {
          white-space: nowrap;
          margin: 0 4em;
        }

        .scroll div {
          display: flex;
          gap: 4em;
        }

        .scroll p,
        .scroll h1 {
          font-size: var(--main-fs);
          color: var(--main-light);
          font-weight: bold;
          margin-bottom: 0;
          line-height: 10px;
        }

        .RightToLeft {
          animation: RightToLeft 10s infinite linear;
        }

        @keyframes RightToLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="heading">
        {/* <CanvasBanner /> */}
        <div className="markq">
          <div className="scroll">
            <div className="RightToLeft">
              <h1>Продажа букетов онлайн с доставкой по Калининграду</h1>
              {categories.map((c) => (
                <p key={c.id}>{c.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="categories container">
        <SubNav {...{ categories }} />
        <Gallery data={products} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </motion.section>
  );
}
