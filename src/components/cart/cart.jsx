import React from "react";
import { useSelector } from "react-redux";
import { SelectedProduct } from "../selected-product/selected-product";
import { nanoid } from "@reduxjs/toolkit";

export const Cart = () => {
  const { product_list } = useSelector((state) => state.product);

  return (
    <div className="w-[400px] p-[30px] bg-white h-screen">
      {product_list?.map((item) => {
        return <SelectedProduct key={nanoid()} {...item} />;
      })}
    </div>
  );
};
