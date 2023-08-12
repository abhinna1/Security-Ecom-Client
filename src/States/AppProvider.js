import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const CartProvider = (props) => {
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};
export default CartProvider;
