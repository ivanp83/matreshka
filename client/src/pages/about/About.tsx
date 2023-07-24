import { FC, useEffect, useRef } from "react";
import Container from "../../components/container/Container";
import "./About.scss";
import image from "../../assets/me.jpg";

const About: FC = () => {
  const blurred = useRef(null);
  useEffect(() => {
    const blurredImageDiv = blurred.current as any;
    if (blurredImageDiv) {
      const img = blurredImageDiv.querySelector("img");

      function loaded() {
        if (!!blurredImageDiv) blurredImageDiv.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    }
  }, []);
  return (
    <section className={"about"} itemScope itemType="http://schema.org/Blog">
      <Container>
        <h1 itemProp="headline">И так друзья!</h1>
        <div className="blurred" ref={blurred}>
          <picture itemProp="url contentUrl">
            <source media="(max-width: 799px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image} />
            <img srcSet={image} alt="Юлиана Легкодумова" loading="lazy" />
          </picture>
        </div>
        <p className="text" itemProp="articleBody">
          <span>
            Меня зовут Юлиана &nbsp;
            <a href="http://instagram.com/_u/yulianalegkodumova/">
              @yulianalegkodumova
            </a>
            &nbsp; мне 35, у меня 4-ро детей и все мои драконы мальчики, самому
            младшему исполнилось 2 месяца.
          </span>
          <span>
            Я люблю цветы, уют и красоту вокруг. Я с детства собирала цветы в
            поле, по дороге куда-либо, на даче и т.д. И вот уже в сознательном
            возрасте посреди ночи меня осенило. Сначала пришло название -
            Матрёшка, русское красивое ( всегда поражали иностранные вывески,
            живем в России а вокруг Ля флёр - Дэ флёр) которое ассоциируется с
            цветами. Так вот после названия я решила что хочу вернуться к
            детскому увлечению, Посмотрела пару роликов на ютуб по сборке
            букетов, потренировалась и разместила свою цветочную мастерскую прям
            на кухне. Оформила страничку в Инстаграм, нашла поставщиков и вот
            первые букеты собирала друзьям и знакомым.
          </span>
          <span>
            Потренировавшись и просмотрев не одну цветочную страницу пришло
            понимание как можно делать красиво и не обычно. Самыми популярными
            стали мои WOW букеты и композиции с объемными розами. На сегодняшний
            день мое маленькое хобби нашло отклик во многих сердцах моих
            постоянных гостей и готово переходить на новый уровень. А это
            большое светлое помещение которое будет похоже на тропический сад
            посреди каменных джунглей, где будем пить с вами чай беседовать на
            разные темы и собирать потрясающей красоты букеты и композиции. Ведь
            все начинается с любви к себе, дому и цветам. ❤️
          </span>
        </p>
      </Container>
      <meta itemProp="datePublished" content="2023-07-24" />
      <meta itemProp="dateModified" content="2023-07-24" />
      {/* <p
        style={{
          visibility: "hidden",
          userSelect: "none",
          position: "absolute",
          width: "0",
          height: "0",
        }}
      >
        Запись была обновлена: <span itemProp="dateModified">2021/02/13</span>
      </p>
      <time
        itemProp="datePublished"
        dateTime="2023-07-24"
        style={{
          visibility: "hidden",
          userSelect: "none",
          position: "absolute",
          width: "0",
          height: "0",
        }}
      >
        2023-07-24
      </time> */}
    </section>
  );
};

export { About };
