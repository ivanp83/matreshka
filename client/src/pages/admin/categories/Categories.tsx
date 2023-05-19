import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { Api } from "../../../api";
import Container from "../../../components/container/Container";
import Loader from "../../../components/loader/Loader";
import ItemsList from "./ItemsList";
import { CategoryItem } from "../../../types/types";

function AdminCategories() {
  const [availableCat, setAvailableCat] = useState<CategoryItem[] | []>([]);

  const onDelete = async (id: number) => {
    if (window.confirm("Точно хочешь удалить?")) {
      await Api().category.delete(id);
      await fetchData();
    }
  };

  const fetchData = async () => {
    const categories = await Api().category.getAll();
    setAvailableCat(categories);
  };

  useEffect(() => {
    fetchData();
  }, [setAvailableCat]);
  return (
    <section>
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

export { AdminCategories };
