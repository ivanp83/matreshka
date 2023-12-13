import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const currencyFormat = (num) => {
  const value = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
  return value;
};

const getDate = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return year + "-" + month + "-" + day;
};
const getFilteredCategories = (categories, products) => {
  const catsArray = {};
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    catsArray[category.id] = 0;

    for (let j = 0; j < products.length; j++) {
      const product = products[j];
      if (product)
        if (product.category_id === category.id) catsArray[category.id] += 1;
    }
  }

  let index = [];
  for (let k in catsArray) {
    if (catsArray[k] === 0) index.push(k);
  }

  return categories.filter((c) => {
    if (!index.includes(String(c.id))) return c;
  });
};

module.exports = {
  currencyFormat,
  getDate,
  getFilteredCategories,
};
