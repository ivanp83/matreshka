import { FC, Suspense, useEffect, useLayoutEffect, useRef } from "react";
import "./Categories.scss";
import Container from "../../components/container/Container";
import { Api } from "../../api";
import Loader from "../../components/loader/Loader";
import { ResolvedCategoriesResponse } from "../../types/types";
import { Await, NavLink, defer, useLoaderData } from "react-router-dom";

const Categories: FC = () => {
  const blurred = useRef(null);
  const { categories } = useLoaderData() as ResolvedCategoriesResponse;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <section className={"categories"}>
      <Container>
        <Suspense fallback={<Loader />}>
          <Await resolve={categories}>
            <ul className="categories-list">
              {categories.map((cat) => (
                <li key={cat.id} className="category">
                  <NavLink to={`products/${cat.id}`}>
                    <figure>
                      <div className="blurred" ref={blurred}>
                        <img
                          src={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${
                            cat.image
                          }`}
                          alt={cat.name}
                        />
                      </div>
                      <figcaption>
                        <h4>{cat.name}</h4>
                      </figcaption>
                    </figure>
                  </NavLink>
                </li>
              ))}
            </ul>
          </Await>
        </Suspense>
      </Container>
    </section>
  );
};

async function getCategories() {
  const data = await Api().category.getAll();

  return data;
}

const categoriesLoader = async () => {
  return defer({
    categories: await getCategories(),
  });
};

export { Categories, categoriesLoader };
