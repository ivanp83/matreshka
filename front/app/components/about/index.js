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
          strong,
          b {
            font-weight: var(--main-fw);
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
              width: 90vw;
              height: 90vw;
              position: relative;
              grid-row: 1;
              margin: 0 auto;
              grid-column: 1/4;
            }
            .text {
              grid-column: 1/4;
            }
            .text span {
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

        <p className="text">
          <span className="image">
            <Image
              property="priority"
              quality={100}
              src={data.mainBanner}
              alt="Юлиана Легкодумова, флорист и основатель цветочного бутика 'Матрёшка Флаверс'."
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 500px"
            />
          </span>

          <span>
            Здравствуйте, дорогие мои! Меня зовут Юлиана, и я влюбленна в свою
            работу и <b>цветы</b>. Я готова поделиться с вами своей страстью к
            прекрасному и замечательным букетам, которые я создаю своими руками.
          </span>

          <span>
            Мне 35, у меня 4-ро детей и все мои драконы мальчики, самому
            младшему исполнилось 2 месяца. Я люблю цветы, уют и красоту вокруг.
            Я с детства собирала цветы в поле, по дороге куда-либо, на даче и
            т.д. И вот уже в сознательном возрасте посреди ночи меня осенило.
            Сначала пришло название - Матрёшка, русское красивое ( всегда
            поражали иностранные вывески, живем в России а вокруг Ля флёр - Дэ
            флёр) которое ассоциируется с цветами. Так вот после названия я
            решила что хочу вернуться к детскому увлечению.
          </span>

          <span>
            Посмотрела пару роликов на ютуб по сборке букетов, потренировалась и
            разместила свою цветочную мастерскую прямо на кухне. Оформила
            страничку в Инстаграм, нашла поставщиков и вот первые букеты
            собирала друзьям и знакомым. Потренировавшись и просмотрев не одну
            цветочную страницу пришло понимание как можно делать красиво и не
            обычно. Самыми популярными стали мои WOW букеты и&nbsp;
            <b>композиции с объемными розами</b>.
          </span>
          <span>
            На сегодняшний день мое маленькое хобби нашло отклик во многих
            сердцах моих постоянных гостей и готово переходить на новый уровень.
            А это большое светлое помещение которое будет похоже на тропический
            сад посреди каменных джунглей, где будем пить с вами чай беседовать
            на разные темы и собирать потрясающей красоты букеты и композиции.
            Ведь все начинается с любви к себе, дому и цветам.❤️
          </span>
        </p>
      </section>
    </motion.div>
  );
}
