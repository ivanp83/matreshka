import { CartItemType, ProductItem } from "@/types";
import {
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";

type CartPositionType = {
  x: number;
  y: number;
};

interface AppContext {
  loading: boolean;
  menuIsOpen: boolean;
  cartPosition: CartPositionType;
  setCartPosition: Dispatch<SetStateAction<CartPositionType>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemType[];
  setCartItems: Dispatch<SetStateAction<CartItemType[]>>;
  activeCategory: number;
  setActiveCategory: Dispatch<SetStateAction<number>>;
  onUpdate: (product: ProductItem) => void;
  onIncrement: (product: ProductItem) => void;
  onDecrement: (product: ProductItem) => void;
  onCartClear: () => void;
}

interface AppProps {
  children: ReactNode;
}

const defaultStatePage: AppContext = {
  loading: false,
  menuIsOpen: false,
  cartPosition: { x: 0, y: 0 },
  setCartPosition: () => {},
  setMenuIsOpen: () => {},
  setLoading: () => {},
  cartItems: [],
  setCartItems: () => {},
  activeCategory: 0,
  setActiveCategory: () => {},
  onUpdate: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onCartClear: () => [],
};

const AppContext = createContext<AppContext>(defaultStatePage);

export const AppProvider = ({ children }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const onUpdate = async (product: ProductItem) => {
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
  const onIncrement = async (product: ProductItem) => {
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
  const onDecrement = async (product: ProductItem) => {
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
    activeCategory,
    setActiveCategory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
