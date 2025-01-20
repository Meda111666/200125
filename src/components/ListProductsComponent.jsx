import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

function ListProductsComponent({ product }) {
  console.log(product);

  return (
    <div className="w-[300px] h-full border border-blue-500 font-semibold flex flex-col justify-center items-center gap-[20px] p-[30px] ">
      <img
        className="w-full h-[200px] object-cover "
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="mt-[50px] text-center ">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
      <FaBasketShopping size={32} color="green" className=" cursor-pointer" />
    </div>
  );
}

export default ListProductsComponent;
