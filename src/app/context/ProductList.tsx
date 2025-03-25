"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import DetailPage from "@/components/DetailPage/DetailPage";
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const urlAPI = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(urlAPI)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <DetailPage name = {'Sản Phẩm'} />
      <div className="list_product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((product) => (
          <Card key={product.id} id={product.id} title={product.title}
            price={product.price} image={product.image}
            description={product.description}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
