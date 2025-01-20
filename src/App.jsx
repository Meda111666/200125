import { useEffect, useState } from "react";
import ListProductsComponent from "./components/ListProductsComponent";
import SingleProductComponent from "./components/SingleProductComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [allProdusts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setIsLoading(true);
      });
  }, []);

  return (
    <>
      {/* <div className="flex flex-wrap items-center justify-center gap-[20px]">
        {isLoading ? (
          allProdusts.map((product) => {
            return <ListProductsComponent key={product.id} product={product} />;
          })
        ) : (
          <h2>LOADING</h2>
        )}
      </div> */}
      <SingleProductComponent />;
      <ToastContainer />
    </>
  );
}

export default App;
