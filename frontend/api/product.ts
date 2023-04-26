import { ProductItem } from "@/types";
import { AxiosInstance } from "axios";

export const ProductApi = (instance: AxiosInstance) => ({
  async find(id: number) {
    const { data } = await instance.get<ProductItem>(`/products/${id}`);
    return data;
  },

  async findAll() {
    const { data } = await instance.get<Array<ProductItem>>(`/products`);
    return data;
  },
});
