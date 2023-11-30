import { createContext, useState, useEffect, useContext } from "react";

const defaultStatePage = {
  loading: false,
  menuIsOpen: false,
  cartPosition: { x: 0, y: 0 },
  setCartPosition: () => {},
  setMenuIsOpen: () => {},
  setLoading: () => {},
  cartItems: [],
  setCartItems: () => {},
  onUpdate: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onCartClear: () => [],
};

const AppContext = createContext(defaultStatePage);

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });

  const onUpdate = async (product) => {
    try {
      setLoading(true);
      const exist = cartItems.find((prod) => prod.id === product.id);

      if (!!exist) {
        const item = cartItems.map((prod) =>
          prod.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : prod
        );

        setCartItems(item);
        localStorage.setItem("cartItems", JSON.stringify(item));
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...cartItems, { ...product, quantity: 1 }])
        );
      }
    } catch (error) {
      throw Error("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };
  const onIncrement = async (product) => {
    try {
      setLoading(true);
      const exist = cartItems.find((prod) => prod.id === product.id);

      if (!exist) {
        return;
      } else {
        const data = cartItems.map((prod) =>
          prod.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : prod
        );
        localStorage.setItem("cartItems", JSON.stringify(data));
        setCartItems(data);
      }
    } catch (error) {
      throw Error("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };
  const onDecrement = async (product) => {
    try {
      setLoading(true);
      const exist = cartItems.find((prod) => prod.id === product.id);

      let data;
      if (!exist) {
        return;
      } else if (exist?.quantity === 1) {
        data = cartItems.filter((prod) => prod.id !== product.id);
      } else {
        data = cartItems.map((prod) =>
          prod.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : prod
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(data));
      setCartItems(data);
    } catch (error) {
      throw Error("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };
  const onCartClear = async () => {
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) setCartItems(JSON.parse(items));
  }, [setCartItems]);

  const value = {
    loading,
    setLoading,
    cartItems,
    cartPosition,
    setCartPosition,
    setCartItems,
    onUpdate,
    onIncrement,
    onDecrement,
    menuIsOpen,
    setMenuIsOpen,
    onCartClear,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
