"use client";
import Card from "@/components/Card/Card";
import DetailPage from "@/components/DetailPage/DetailPage";
import { useData } from "./DataContext";
import { Select } from "antd";
// import { useEffect, useState } from "react";



const ProductList = () => {
  const { stateData } = useData();

  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: {
      rate: number;
      count: number
    };
    category: string;

  }

  const productsList: Product[] = stateData.data as Product[];




  return (
    <>
      <DetailPage name={"Sản Phẩm"} nameBack="Giỏ Hàng" address={"Home"} />

      <div className="list_product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {productsList.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image || ""}
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
