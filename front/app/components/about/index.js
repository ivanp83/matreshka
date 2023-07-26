"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Index({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="about container">
        <style jsx>{`
          section {
            width: 100%;
            position: relative;
            height: fit-content;
            width: 100%;
            min-height: 100vh;
            grid-template-rows: min-content min-content;
            grid-row-gap: var(--space-small);
          }
          .title {
            grid-column: 2/4;
            grid-row: 1;
            z-index: 1;
            font-size: var(--title-fs);
            display: flex;
            line-height: 1;
            align-items: center;
          }

          .image {
            grid-column: 1/2;
            position: absolute;
            left: 0;
            width: 20rem;
            height: 20rem;
          }
          b {
            font-weight: 600;
          }
          .text {
            grid-column: 2/3;

            display: grid;
            grid-gap: var(--space-small);
          }
          @media all and (max-width: 1024px) {
            .text {
              grid-column: 2/4;
            }
          }
          @media all and (max-width: 1024px) and (orientation: portrait) {
            .image {
              position: absolute;

              width: 28vw;
              height: 28vw;
            }
          }
          @media all and (max-width: 760px) and (orientation: portrait) {
            .title {
              grid-column: 1/4;
            }
            .image {
              width: 80vw;
              height: 80vw;
              position: relative;
              grid-row: 2;
              margin: 0 auto;
              grid-column: 1/4;
            }
            .text {
              grid-column: 1/4;
            }
          }
          @media all and (max-width: 1024px) and (orientation: landscape) {
            .image {
              position: absolute;
              width: 30vw;
              height: 30vw;
            }
          }
        `}</style>

        <h1 className="title">{data.title}</h1>
        <div className="image">
          <Image
            property="priority"
            quality={100}
            src={data.mainBanner}
            alt="Юлиана Легкодумова"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 500px"
          />
        </div>

        <div className="text">
          <b>{data.text[0]}</b>
          {data.text.splice(1, data.text.length).map((t, i) => (
            <span key={t}>{t}</span>
          ))}
          <span></span>
        </div>
      </section>
    </motion.div>
  );
}
