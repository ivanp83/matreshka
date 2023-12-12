export const CheckoutApi = (instance) => ({
  async create(order) {
    const data = await instance.post(`/checkout `, order);
    return data;
  },
});
