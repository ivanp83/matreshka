import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { Api } from "../../../api";
import Container from "../../../components/container/Container";
import Loader from "../../../components/loader/Loader";
import ItemsList from "./ItemsList";
import { ProductItem } from "../../../types/types";
import { useAppContext } from "../../../context/app.context";

function Products() {
  const { loading, setLoading } = useAppContext();
  const [availableProducts, setAvailableProducts] = useState<
    ProductItem[] | []
  >([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const products = await Api().product.getAll();
      setAvailableProducts(products);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const onDelete = async (id: number) => {
    if (window.confirm("Точно хочешь удалить?")) {
      try {
        setLoading(true);
        const res = await Api().product.delete(id);
        setAvailableProducts(res);
      } catch (error) {
        alert("Ошибка на сервере");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [setAvailableProducts]);

  return (
    <section>
      <Container>
        <Suspense fallback={<Loader />}>
          <Await resolve={availableProducts}>
            <ItemsList avaialbleItems={availableProducts} onDelete={onDelete} />
          </Await>
        </Suspense>
      </Container>
    </section>
  );
}

export { Products };
