import { IProduct } from "../models";
import { useState } from "react";

interface ProductsProps {
  product: IProduct;
}

function Products({ product }: ProductsProps) {
  const [shown, setShown] = useState(false);

  const buttonClasses = [
    "py-2 px-4 border",
    shown ? "bg-blue-400" : "bg-yellow-400",
  ];

  return (
    <div className="container py-2 px-2 flex flex-col items-center border mb-2">
      {product.title}
      <img className="w-1/6 h-1/6" src={product.image} alt="" />
      <p>{product.price}$</p>
      <button
        className={buttonClasses.join(" ")}
        onClick={() => setShown(!shown)}
      >
        {shown ? "Hide details" : "Show details"}
      </button>
      {shown && <p>{product.description}</p>}
      <p>
        Rate: <span>{product?.rating?.rate}</span>
      </p>
    </div>
  );
}

export default Products;
