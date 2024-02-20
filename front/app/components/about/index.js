"use client";
import Image from "next/image";
import styles from "@/app/styles/about.module.scss";
import { motion } from "framer-motion";
import CustomImage from "../shared/image";

export default function Index({ data }) {
  const calcAge = () => {
    const curYear = new Date().getFullYear();
    const birth = new Date(1987, 3, 6).getFullYear();

    return curYear - birth;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={styles.about}>
        <section className={styles.section_1}>
          <div className={styles.block_1}>
            <div className={styles.empty}></div>
            <div className={styles.text}>
              <h1>Я, цветы и Матрёшка</h1>
              <p>
                Здравствуйте, дорогие мои! Меня зовут Юлиана, и я влюбленна в
                свою работу и <b>цветы</b>. Я готова поделиться с вами своей
                страстью к прекрасному и замечательным букетам, которые я создаю
                своими руками. Мне {calcAge()}, у меня 4-ро детей и все мои
                драконы мальчики, самому младшему исполнилось 2 месяца. Я люблю
                цветы, уют и красоту вокруг. Я с детства собирала цветы в поле,
                по дороге куда-либо, на даче и т.д. И вот уже в сознательном
                возрасте посреди ночи меня осенило.
              </p>
            </div>
          </div>
          <div className={styles.block_2}>
            <div className={styles.image}>
              <CustomImage direct={true} src="/images/about1.jpg" />
            </div>
            <div className={styles.image_mobile}>
              <CustomImage direct={true} src="/images/about1a.jpg" />
            </div>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.block}>
            <div className={styles.cell_1}></div>
            <div className={styles.cell_2}>
              <div className={styles.image2}>
                <CustomImage direct={true} src="/images/about2.jpg" />
              </div>
              <div className={styles.text}>
                <p className={styles.par}>
                  Сначала пришло название - Матрёшка, русское красивое ( всегда
                  поражали иностранные вывески, живем в России а вокруг Ля флёр
                  - Дэ флёр) которое ассоциируется с цветами. Так вот после
                  названия я решила что хочу вернуться к детскому увлечению.
                  Посмотрела пару роликов на ютуб по сборке букетов,
                  потренировалась и разместила свою цветочную мастерскую прямо
                  на кухне. Оформила страничку в Инстаграм, нашла поставщиков и
                  вот первые букеты собирала друзьям и знакомым.
                  Потренировавшись и просмотрев не одну цветочную страницу
                  пришло понимание как можно делать красиво и не обычно.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
          <div className={styles.block_1}>
            <div className={styles.empty}></div>
            <div className={styles.text}>
              <p>
                На сегодняшний день мое маленькое хобби нашло отклик во многих
                сердцах моих постоянных гостей и готово переходить на новый
                уровень. А это большое светлое помещение которое будет похоже на
                тропический сад посреди каменных джунглей, где будем пить с вами
                чай беседовать на разные темы и собирать потрясающей красоты
                букеты и композиции. Ведь все начинается с любви к себе, дому и
                цветам.❤️
              </p>
            </div>
          </div>
          <div className={styles.block_2}>
            <div className={styles.image}>
              <CustomImage direct={true} src="/images/about3.jpg" />
            </div>
            <div className={styles.image_mobile}>
              <CustomImage direct={true} src="/images/about3a.jpg" />
            </div>
          </div>
        </section>
        {/* <span className="image">
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
        <div className="text">
          <h1 className="title">{data.title}</h1>
          <p>
            <span>
              Здравствуйте, дорогие мои! Меня зовут Юлиана, и я влюбленна в свою
              работу и <b>цветы</b>. Я готова поделиться с вами своей страстью к
              прекрасному и замечательным букетам, которые я создаю своими
              руками. Мне 35, у меня 4-ро детей и все мои драконы мальчики,
              самому младшему исполнилось 2 месяца. Я люблю цветы, уют и красоту
              вокруг. Я с детства собирала цветы в поле, по дороге куда-либо, на
              даче и т.д. И вот уже в сознательном возрасте посреди ночи меня
              осенило. Сначала пришло название - Матрёшка, русское красивое (
              всегда поражали иностранные вывески, живем в России а вокруг Ля
              флёр - Дэ флёр) которое ассоциируется с цветами. Так вот после
              названия я решила что хочу вернуться к детскому увлечению.
            </span>

            <span>
              Посмотрела пару роликов на ютуб по сборке букетов, потренировалась
              и разместила свою цветочную мастерскую прямо на кухне. Оформила
              страничку в Инстаграм, нашла поставщиков и вот первые букеты
              собирала друзьям и знакомым. Потренировавшись и просмотрев не одну
              цветочную страницу пришло понимание как можно делать красиво и не
              обычно. Самыми популярными стали мои WOW букеты и&nbsp;
              <b>композиции с объемными розами</b>. На сегодняшний день мое
              маленькое хобби нашло отклик во многих сердцах моих постоянных
              гостей и готово переходить на новый уровень. А это большое светлое
              помещение которое будет похоже на тропический сад посреди каменных
              джунглей, где будем пить с вами чай беседовать на разные темы и
              собирать потрясающей красоты букеты и композиции. Ведь все
              начинается с любви к себе, дому и цветам.❤️
            </span>
          </p>
        </div> */}
      </section>
    </motion.div>
  );
}
