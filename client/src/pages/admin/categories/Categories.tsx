import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { Api } from "../../../api";

import Container from "../../../components/container/Container";
import Loader from "../../../components/loader/Loader";

import ItemsList from "./ItemsList";
import { CategoryItem } from "../../../types/types";
import { useAppContext } from "../../../context/app.context";

function AdminCategories() {
  const { loading, setLoading } = useAppContext();
  const [availableCat, setAvailableCat] = useState<CategoryItem[] | []>([]);
  const onDelete = async (id: number) => {
    if (window.confirm("Точно хочешь удалить?")) {
      try {
        setLoading(true);
        await Api().category.delete(id);
        await fetchData();
      } catch (error) {
        alert("Ошибка на сервере");
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const categories = await Api().category.getAll();
      setAvailableCat(categories);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setAvailableCat]);
  return (
    <section>
      {loading && <Loader />}
      <Container>
        <Suspense fallback={<Loader />}>
          <Await resolve={availableCat}>
            <ItemsList avaialbleItems={availableCat} onDelete={onDelete} />
          </Await>
        </Suspense>
      </Container>
    </section>
  );
}
// async function getCategories() {
//   const categories = await Api().category.getAll();
//   return categories;
// }

// const adminCategoriesLoader = async () => {
//   return defer({
//     categories: await getCategories(),
//   });
// };

export { AdminCategories };
