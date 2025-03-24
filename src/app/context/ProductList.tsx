"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";


const ProductList = () => {
  const [products, setProducts] = useState([]);
    const urlAPI = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

    console.log(products[1]);
  return (
    <div className="list_product grid grid-cols-5 gap-4">
      {products.map((product) => (
        <Card key={product.id} title={product.title} 
                price={product.price} image={product.image} 
                description={product.description}
                rating={product.rating}
                category={product.category}
        />

      ))}
      
    </div>
  );
};

export default ProductList;
