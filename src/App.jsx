import React from "react";
import { ProductCard } from "./components/product-card/product-card";
import { products } from "./data/products";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid mt-[20px] grid-cols-4 gap-[10px]">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
