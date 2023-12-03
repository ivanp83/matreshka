import React from "react";

export default function Breadcrumbs(props) {
  return (
    <>
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <a
            itemprop="item"
            href={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`}
          >
            <span itemprop="name">Главная</span>
          </a>
          <meta itemprop="position" content="1" />
        </li>
        ›
        <li
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <a
            itemscope
            itemtype="https://schema.org/WebPage"
            itemprop="item"
            itemid={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`}
            href={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`}
          >
            <span itemprop="name">Букеты</span>
          </a>
          <meta itemprop="position" content="2" />
        </li>
        ›
        <li
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <span itemprop="name">Award winners</span>
          <meta itemprop="position" content="3" />
        </li>
      </ol>
    </>
  );
}
