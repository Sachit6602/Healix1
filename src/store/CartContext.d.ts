declare module '../store/CartContext' {
    interface Product {
      id: string;
      name: string;
      price: number;
      image?: string;
      description?: string;
    }
  
    interface CartContextType {
      cart: Product[];
      dispatch: (action: { type: string; payload: Product }) => void;
    }
  
    export const useCart: () => CartContextType;
    export const CartProvider: React.FC;
  }
  