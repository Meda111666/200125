import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

function SingleProductComponent() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/12")
      .then((res) => res.json())
      .then((response) => {
        setSingleProduct(response);
        setIsLoading(true);
        setTimeout(() => toast.success("Stigao proizvod"), 10000);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading ? (
        <>
          <img
            className="rounded-full border border-green-500 border-4 bg-slate-300"
            src={singleProduct.thumbnail}
            alt="{title}"
          />
          <h3 className="font-serif font-semibold text-[22px] text-blue-950 ">
            {singleProduct.title}
          </h3>
          <p className="text-green-800 font-bold text-[18px]">
            ${singleProduct.price}
          </p>
          <img className="w-[100px]" src={singleProduct.images[0]} alt="" />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default SingleProductComponent;
