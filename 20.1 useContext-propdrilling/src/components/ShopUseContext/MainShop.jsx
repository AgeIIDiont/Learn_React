import {useState} from "react";
import ProductList from "./ProductList.jsx";
import CartContext from "./CartContext.jsx";

export default function MainShop1() {
  const [cartCount, setCartCount] = useState(0);

  function handleCart() {
    setCartCount((prev) => prev + 1);
  }
  return (
    <CartContext.Provider value={{handleCart, cartCount}}>
      <div>
        <h1>Giỏ hàng: {cartCount} sản phẩm</h1>
        <ProductList addToCart={handleCart} />
      </div>
    </CartContext.Provider>
  );
}
