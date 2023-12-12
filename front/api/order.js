export const OrderApi = (instance) => ({
  async find(id) {
    const { data } = await instance.get(`/orders/${id}`);
    return data;
  },
});
