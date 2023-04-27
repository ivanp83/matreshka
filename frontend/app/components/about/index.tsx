"use client";
import Logo from "@/app/header/logo";
import Image from "next/image";

export default function Index() {
  return (
    <section className="about container">
      <style jsx>{`
        section {
          width: 100%;
          position: relative;
          height: fit-content;
          width: 100%;
          grid-row-gap: var(--space-small);
        }
        .title {
          grid-column: 1/4;
          grid-row: 1;
          z-index: 1;
          font-size: var(--heading-fs);
          text-transform: uppercase;
          display: flex;
          line-height: 1;
          align-items: center;
        }
        .logo {
          grid-column: 3/4;
        }

        .image {
          position: relative;
          width: 10rem;
          height: 10rem;
        }

        .text {
          grid-column: 1/2;
          grid-row: 2;
          display: grid;
          grid-gap: var(--space-small);
        }
        @media all and (max-width: 760px) and (orientation: portrait) {
          .title {
            grid-column: 1/4;
          }
          .image {
            width: 26vw;
            height: 26vw;
          }
          .text {
            grid-column: 1/4;
          }
        }
      `}</style>
      <div className="title">
        <span>a</span>
        <span>b</span>
        <div className="image">
          <Image
            src="/images/1.png"
            alt="Юлиана Легкодумова"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <span>u</span>
        <span>t</span>
      </div>
      {/* Почему бы и да!!! - <span className="red">Why&Yes</span> */}
      <div className="logo">
        <Logo />
      </div>
      {/* <div className="image">
        <Image
          src="/images/1.png"
          alt="Юлиана Легкодумова"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div> */}
      {/* <div className="left">
        <div className="image">
          <Image
            src="/images/1.png"
            alt="Юлиана Легкодумова"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div> */}
      <div className="text">
        <span>
          Привет! Меня зовут, Юлиана. Мне 35, у меня 4-ро детей и все мои
          драконы мальчики, самому младшему исполнилось 2 месяца. Я люблю цветы,
          уют и красоту вокруг. Я с детства собирала цветы в поле, по дороге
          куда-либо, на даче и т.д. И вот уже в сознательном возрасте посреди
          ночи меня осенило. Сначала пришло название - Матрёшка, русское
          красивое ( всегда поражали иностранные вывески, живем в России а
          вокруг Ля флёр - Дэ флёр) которое ассоциируется с цветами. Так вот
          после названия я решила что хочу вернуться к детскому увлечению.
        </span>

        <span>
          Посмотрела пару роликов на ютуб по сборке букетов, потренировалась и
          разместила свою цветочную мастерскую прям на кухне. Оформила страничку
          в Инстаграм, нашла поставщиков и вот первые букеты собирала друзьям и
          знакомым. Потренировавшись и просмотрев не одну цветочную страницу
          пришло понимание как можно делать красиво и не обычно. v Самыми
          популярными стали мои WOW букеты и композиции с объемными розами.{" "}
        </span>
        <span>
          На сегодняшний день мое маленькое хобби нашло отклик во многих сердцах
          моих постоянных гостей и готово переходить на новый уровень. А это
          большое светлое помещение которое будет похоже на тропический сад
          посреди каменных джунглей, где будем пить с вами чай беседовать на
          разные темы и собирать потрясающей красоты букеты и композиции. Ведь
          все начинается с любви к себе, дому и цветам. ❤️
        </span>
      </div>
    </section>
  );
}
