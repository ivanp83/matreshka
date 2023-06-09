import { Category } from "@/types";
import { forwardRef } from "react";
import CustomImage from "../image";
import Link from "next/link";
import { useAppContext } from "@/app/context/app.context";
import { useRouter } from "next/navigation";

type Props = {
  categories: Array<Category>;
};

export default function Categories({ categories }: Props) {
  const { activeCategory, setActiveCategory } = useAppContext();

  const router = useRouter();
  return (
    <section className="categories">
      <style jsx>{`
        .categories {
          grid-column: 1/4;
          padding: var(--space-small) 0 var(--space-med);
        }
        h2 {
          grid-column: 1/2;
        }

        ul {
          grid-column: 2/4;
          display: grid;
          grid-template-columns: 1fr;
        }
        li {
          display: flex;
          border-bottom: 1px solid var(--main-gray);
          padding: 1rem 0;
          position: relative;
        }
        button {
          width: 100%;
          text-align: left;
          display: flex;
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
          color: var(--main-dark);
        }
        .text {
          line-height: 1;
          font-weight: 500;
          font-size: 2rem;
          text-transform: uppercase;
        }
        .num {
          display: inline-flex;
          margin-right: 10px;
          line-height: 1;
          font-size: 16px;
          color: var(--main-gray);
        }
        a {
          display: contents;
        }
        .image {
          display: block;
          position: absolute;
          width: 3rem;
          height: 4rem;
          top: 0;
          right: 0;
          opacity: 0;
          transition: all 0.5s;
        }

        li:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }
        @media (hover: hover) and (pointer: fine) {
          li:hover .image {
            opacity: 1;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          h2 {
            margin-bottom: var(--space-small);
          }
          ul {
            grid-column: 1/4;
          }
        }
        @media all and (max-width: 1024px) {
          .text {
            font-size: 4vw;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            font-size: 6vw;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .text {
            line-height: 1;
            font-weight: 500;
            font-size: 4vw;
            text-transform: uppercase;
          }
        }
      `}</style>
      <div className="wrapp container">
        <h2>Категории</h2>
        <ul>
          {categories.map((cat, i) => (
            <li key={cat.id}>
              <button
                onClick={() => {
                  router.push("categories");
                  setActiveCategory(cat.id);
                }}
              >
                <span className="image">
                  <CustomImage
                    src={cat.image}
                    alt={cat.name}
                    sizes="(max-width: 768px) 300px,
(max-width: 1200px) 600px"
                  />
                </span>
                <span className="num">0{i + 1}/</span>
                <span className="text">{cat.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
