import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
      <img src="/images/logo.png" alt="Лого Матрёшка" />
    </Link>
  );
};

export default Logo;
