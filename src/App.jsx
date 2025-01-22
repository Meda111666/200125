import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductService from "./components/services/produstService";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  useEffect(() => {
    ProductService.getSingleProduct()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center my-[60px]">
      <h1 className="text-[60px] text-green-600 font-extrabold mb-[40px]">
        LODO APP
      </h1>

      <ToastContainer />
    </div>
  );
}

export default App;
