import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
      <img src="/images/logo.png" alt="Лого Матрёшка Флаверс" />
    </Link>
  );
};

export default Logo;
