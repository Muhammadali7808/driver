import { IconButton, Badge, Drawer } from "@mui/material";
import { CartIcon } from "../../assets/cart-icon";
import { Cart } from "../cart/cart";
import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const [showP, setShowP] = React.useState(false);
  const { count } = useSelector((state) => state.product);

  return (
    <div className="p-[30px] bg-blue-500  ">
      <Drawer onClose={() => setShowP(false)} open={showP} anchor="left">
        <button onClick={() => setShowP(false)} className="text-[#a6a5a5] hover:text-[#3dd85e] hover:bg-gray-500  p-[10px] bg-gray-600 font-bold">HOME</button>
        <Cart />
      </Drawer>
      <div className="max-w-[1200px] mx-auto">
        <IconButton onClick={() => setShowP(true)} aria-label="cart">
          <Badge badgeContent={count ? count : "0"} color="error">
            <CartIcon />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};
