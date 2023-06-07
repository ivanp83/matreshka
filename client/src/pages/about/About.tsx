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
    <section className={"about"}>
      <Container>
        <h1>И так друзья!</h1>
        <div className="blurred" ref={blurred}>
          <picture>
            <source media="(max-width: 799px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image} />
            <img srcSet={image} alt="Юлиана Легкодумова" loading="lazy" />
          </picture>
        </div>
        <p className="text">
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
    </section>
  );
};

// async function getAbout() {
//   const data = await Api().page.getOne("about");

//   return data;
// }

// const aboutLoader = async () => {
//   return defer({
//     product: await getAbout(),
//   });
// };

export { About };
