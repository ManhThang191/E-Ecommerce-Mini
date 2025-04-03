// "use client";
import React from 'react'
import Image from 'next/image'
import { Button, message } from 'antd'
import { HeartOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
    category: string;
}

function Card({ id, title, price, image, category, description, rating }: CardProps) {

    const { dispatch } = useCart();
    // console.log(state) 

    const handleAddToCart = (productID: number) => {
        try {
            dispatch({
                type: "ADD_PRODUCT",
                payload: { image: image, category: category, id: productID, title: title, price: price, quantity: 1 }
            });
            message.success(`${title} đã được thêm vào giỏ hàng!`);
        } catch {
            message.error(`${title} không được thêm vào giỏ hàng!`);
        }


    }


    return (

        <Link href={`/Detail/${id}`} className="h-auto hover:transform hover:scale-105 duration-300">
            <div className="card object-cover w-60 h-full border border-gray-300
                 rounded-lg p-2.5 m-1.5 flex flex-col justify-between cursor-pointer shadow-lg">
                <Image src={image} alt={title} width={0} height={0}
                    className="card_img w-3/5 h-auto m-auto rounded-lg object-cover"
                    loader={({ src }) => src}
                    priority
                />
                <div className="flex flex-col rounded-lg">
                    <h2 className="my-2.5 max-h-17 overflow-hidden font-bold text-base leading-6 ">
                        {title}
                    </h2>
                    <div className="flex justify-between items-center mb-2.5">
                        <h1 className="text-red-500 text-xl hover:transform hover:scale-110">
                            {price} $
                        </h1>
                        <h1 className="flex gap-1.5 text-lg text-orange-500">
                            {rating.rate} <StarOutlined />
                        </h1>
                    </div>
                    <span className="overflow-hidden text-xs bg-gray-200 my-2.5 rounded-md p-1.5 max-h-15">
                        {description}
                    </span>
                    <div className="flex justify-between gap-1.5 my-2.5">

                        <Link href={`/Detail/${id}`}>
                            <Button className="flex-1 !bg-cyan-700 !text-white 
                                            hover:bg-cyan-800 rounded-lg
                                            hover:transform hover:scale-105 hover:!text-amber-200
                            "
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Chi tiết
                            </Button>
                        </Link>

                        <Button className="flex-1 hover:transform hover:!scale-110 hover:!border-none hover:!bg-green-200 hover:!text-black "
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleAddToCart(id);

                            }}
                        >

                            <ShoppingCartOutlined />
                        </Button>
                        <Button className="flex-1  !text-pink-600 hover:!text-white
                                     hover:!bg-pink-600 hover:!border-none
                                     hover:transform hover:scale-105
                        "
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                            }}
                        >
                            <HeartOutlined />
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card