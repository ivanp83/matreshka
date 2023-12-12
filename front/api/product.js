export const ProductApi = (instance) => ({
  async find(id) {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  },

  async findAll() {
    const { data } = await instance.get(`/products`);
    return data;
  },
});
