import React from 'react'
// import { useEffect, useState } from 'react';
import CardDetail from '@/components/CardDetail/CardDetail';
import { useParams } from 'next/navigation';
import { useData } from '@/app/context/DataContext';

function ShowDetail() {

    interface product {
        id: number;
        title: string;
        price: number;
        image: string;
        description: string;
        rating: {
            rate: number;
            count: number;
        }
        category: string;
    }

    // console.log(useParams());

    const id: string = useParams().id as string;
    // const { state }: { state: { data: product[] } } = useData();
    // const ProductDetail = state.data;

    const { stateData } = useData();
    const ProductDetail = stateData.data as product[];
    // const ProductDetail = state.data;

    const products = ProductDetail.find((item: product) => item.id === parseInt(id));

    if (!products) {
        return <div>Product not found</div>;
    }

    // console.log(products)


    return (
        <>
            <CardDetail
                id={products.id}
                title={products.title}
                description={products.description}
                price={products.price}
                category={products.category}
                rating={products.rating || 0}
                image={products.image || ""}
                quantity={1}
            />
        </>
    )
}

export default ShowDetail