import { useProducts } from "./hooks/products";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {useContext, useState} from "react";
import { IProduct } from "./models";
import {ModalContext} from "./context/CreateContext";
// import { products } from "./data/products";
// import { createElement as e } from "react";

function App() {
  const { dataProducts, loading, error, addProduct } = useProducts();
  const {modal, open, close} = useContext(ModalContext)
  const createHandler = (product: IProduct) => {
    close()
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {dataProducts.map((product) => (
        <Products product={product} key={product.id}></Products>
      ))}
      {modal && (
        <Modal title="Create new product" onClose={()=> close()}>
          <CreateProduct onCreate={createHandler}></CreateProduct>
        </Modal>
      )}
      {!loading && (
            <button
                className="fixed border right-5 bottom-5 bg-black text-white px-4 pt-2 pb-3 rounded-lg"
                onClick={() => open()}
            >
              Create
            </button>
      )}
    </div>
  );

  // return e("div", { className: "container" }, [
  //   e("h1", { className: "font-bold" }, "Hello"),
  //   e("h1", { className: "font-bold" }, `${count}`),
  //   e(
  //     "button",
  //     {
  //       className: "border px-4 py-2",
  //       onClick: () => {
  //         setCount(count + 1);
  //       },
  //     },
  //     "CLICK"
  //   ),
  // ]);
}

export default App;
