import React from "react";
import formatter from "../../utils/currenscy-format";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducers/product-reducer";

export const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img className="w-full" src={props.img} alt="img" />
      <h2 className="text-[25px]">{props.title}</h2>
      <strong>{formatter(props.price)} sum</strong>
      <p>{props.brand}</p>
      <Button
        onClick={() => dispatch(addCart(props))}
        fullWidth
        variant="contained"
      >
        buy
      </Button>
    </div>
  );
};
