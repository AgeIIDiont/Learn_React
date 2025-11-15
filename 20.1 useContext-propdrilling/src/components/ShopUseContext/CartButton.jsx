import { useContext } from "react";
import CartContext from "./CartContext.jsx";
export default function CartButton() {
  const {cartCount, handleCart} = useContext(CartContext);
  return (
    <div>
      <button onClick={handleCart}>Thêm vào giỏ hàng</button>
      <p>Số sang phẩm có trong CartButton: {cartCount} sản phẩm</p>
    </div>
  );
}
