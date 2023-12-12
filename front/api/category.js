export const CategoryApi = (instance) => ({
  async find(id) {
    const { data } = await instance.get(`/categories/${id}`);
    return data;
  },
  async findByIdWithProducts(id) {
    const { data } = await instance.get(`/category-with-products/${id}`);
    return data;
  },
  async findAll() {
    const { data } = await instance.get(`/categories`);
    return data;
  },
});
