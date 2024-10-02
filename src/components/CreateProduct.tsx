import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import Error from "./Error";

const productData: IProduct = {
  title: "test",
  price: 135,
  description: "asdasd",
  image: "https://picsum.photos/200",
  category: "electronic",
  rating: {
    rate: 4.2,
    count: 5,
  },
};

console.log(productData);

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError("Enter a valid title");
      return;
    }

    // productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
    console.log(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-2 mb-2 w-full outline-none"
        placeholder="Product name..."
        value={value}
        onChange={changeHandler}
      />

      <Error error={error}></Error>

      <button
        type="submit"
        className="bg-purple-600 border py-2 px-2 mb-2 hover:bg-purple-400"
      >
        Submit
      </button>
    </form>
  );
}

export default CreateProduct;
