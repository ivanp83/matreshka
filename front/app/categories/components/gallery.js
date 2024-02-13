/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "../styles.module.scss";
import React, { Fragment } from "react";
import CustomImage from "../../components/image";
import { currencyFormat } from "@/utils/helpers";
import Link from "next/link";

export default function Gallery({ data }) {
  return (
    <ul className={styles.gallery}>
      {data.map((prod) => (
        <Fragment key={prod.id}>
          <li>
            <Link href={String(`/product/${prod.id}`)}>
              <div className={styles.wrapper}>
                <div className={styles.image}>
                  <div className={styles.inner}>
                    <CustomImage
                      src={prod.big}
                      alt={`Роскрошный букет ${prod.name} с доставкой по Калининграду`}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <h3>
                    <b>{prod.name}</b>
                  </h3>
                  <p className={styles.price}>{currencyFormat(prod.price)}</p>
                </div>
              </div>
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
