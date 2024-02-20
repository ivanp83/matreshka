"use client";
import { Fragment } from "react";
import styles from "@/app/styles/home.module.scss";
import Image from "next/image";
import CustomImage from "../../shared/image";
import Link from "next/link";

export default function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      <div className={styles.gallery_wrap}>
        {categories.map((cat, i) => (
          <Fragment key={`p_${i}`}>
            <Link href={`/categories/${cat.id}`}>
              <article className={styles.item}>
                <div className={styles.image}>
                  <Image
                    fill
                    src={cat.image}
                    alt={cat.name}
                    sizes="(max-width: 768px) 50vw,
(max-width: 1200px) 25vw"
                  />
                </div>

                <h3>{cat.name}</h3>
              </article>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
