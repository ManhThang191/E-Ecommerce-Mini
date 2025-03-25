import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardDetail from '@/components/CardDetail/CardDetail';


function ShowDetail() {

    const { id } = useParams();
    const productID = parseInt(id, 10);

    const [products, setProducts] = useState([]);
    const urlAPI = 'https://fakestoreapi.com/products';

    useEffect(() => {
        axios.get(urlAPI)
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // const productDetail = products.find((product) => product.id === productID);

  return (
    <>
        {products.find((product) => product.id === productID) ? (
            <CardDetail
                id={products.id}
                title={products.title}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                rating={product.rating}
            />
        ) : (
            <p>Product not found</p>
        )}
    </>
  )
}

export default ShowDetail