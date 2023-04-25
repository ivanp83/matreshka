import Image from "next/image";
import { Category, ProductItem } from "@/types";
import Slider from "./slider";
import Text from "./text";
import Categories from "./categories";
type Props = { products: Array<ProductItem>; categories: Array<Category> };

export default function Сontent({ products, categories }: Props) {
  return (
    <section className="content  container">
      <style jsx>{`
        .content {
          border-radius: 40px;
          background-color: var(--main-pink);
          padding: var(--space-small) 30px var(--space-med);
          padding-top: ;
          grid-row-gap: var(--space-small);
          position: relative;
        }

        h2 {
          position: absolute;
          top: -38px;
          left: 0;
          background: var(--main-pink);
          padding: 1rem 1rem 0;
          border-radius: 40px 40px 0 0;
        }
        .image {
          position: relative;
          grid-column: 2/4;
          height: calc((100vw * 0.7) * 4 / 3);
          border-radius: 40px;
          overflow: hidden;
        }
        h4 {
          grid-column: 2/4;
        }
      `}</style>
      <h2>
        Открой мир цветов
        <br /> заново
      </h2>

      <h4>Ведь всё начинается с любви к себе, дому и цветам</h4>
      <div className="image">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/images/2.jpg"
          alt="Девушка с цветами"
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
        />
      </div>
      <Text
        text1="Мы считаем, что каждый"
        text2=" букет должен быть уникальным и отражать индивидуальность того, кому он предназначен. Поэтому, тщательно подбираем цвета и сочетания, чтобы создать букет, который подходит именно для вашего случая."
      />
      <Slider {...{ products }} />
      <Categories {...{ categories }} />
    </section>
  );
}
