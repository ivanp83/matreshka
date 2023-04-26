import { Category, ProductItem } from "@/types";
import { AxiosInstance } from "axios";

export const CategoryApi = (instance: AxiosInstance) => ({
  async find(id: number) {
    const { data } = await instance.get<Array<Category>>(`/categories/${id}`);
    return data;
  },
  async findByIdWithProducts(id: number) {
    const { data } = await instance.get<Array<ProductItem>>(
      `/category-with-products/${id}`
    );
    return data;
  },
  async findAll() {
    const { data } = await instance.get<Array<Category>>(`/categories`);
    return data;
  },
});
