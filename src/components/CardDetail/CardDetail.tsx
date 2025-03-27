import React from 'react'
// import { useParams } from 'next/navigation';
import DetailPage from '@/components/DetailPage/DetailPage';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'
import { useCart } from '@/app/context/CartContext';


interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };

}


function CardDetail({ id, title, price, image, description, category, rating: { rate , count } }: CardProps) {


    const { state, dispatch } = useCart()
    
    const handleAddToCart = (productID: number) => {

        dispatch({
            type: "ADD_PRODUCT",
            payload: {image:image,category: category, id: productID, name: title, price: price, quantity: 1 }
        });

        // console.log(typeof id)
    }

    return (
        <>
            <DetailPage name={'Chi Tiết Sản Phẩm'} nameBack={'Home'} address={'Detail'}>
                
            </DetailPage>
            <div className='m-auto w-250 h-130 flex text-center rounded-xl border-1 overflow-hidden '

            >
                <div className='flex-1 w-full h-full relative'>
                    <Image
                        src={image || ""} 
                        alt={title}
                        layout='fill'
                        objectFit='contain'
                        loader={({ src }) => src}
                        className=' p-2'
                    />
                </div>
                <div className='flex-1 flex-col w-full h-full '>
                    <div className=' flex items-center justify-center text-2xl bg-cyan-800 text-amber-50' style={{ height: '20%' }}>{title}</div>
                    <div className=' flex items-center justify-around text-3xl text-red-700' style={{ height: '20%' }}>
                        <div className=''>
                            Price : $ {price}

                        </div>
                        <div>
                            <span className='text-amber-500'> {rate}  <StarOutlined /> </span>
                            <span className='text-black'>( {count} )</span>
                        </div>
                    </div>
                    <div className=' flex flex-col items-start  pl-5 pr-5  ' style={{ height: '35%' }}>
                        <div className='mb-3'>
                            <span>
                                Category : {category}
                            </span>
                        </div>
                        <div className='flex items-start w-full'>
                            <span className='text-left '>
                                {description}
                            </span>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center' style={{ height: '25%' }}>
                        <Button className='flex-2 m-3 p-6 !bg-cyan-700 !text-white 
                                         hover:bg-cyan-800 rounded-lg !h-15
                                        hover:transform hover:scale-105  hover:!text-amber-200 text-lg'>
                            <p className='text-2xl'>
                                Mua Ngay
                            </p>
                        </Button>

                        <Button className='flex-1 m-3 p-6 hover:transform hover:!scale-110 hover:!border-none
                                         hover:!bg-green-200 hover:!text-black text-lg !h-15'>
                            <ShoppingCartOutlined className='text-2xl' 
                                onClick={() => {
                                    handleAddToCart(id);

                                }}
                            />
                        </Button>

                        <Button className='flex-1 m-3 p-6 !text-pink-600 hover:!text-white
                                     hover:!bg-pink-600 hover:!border-none
                                     hover:transform hover:scale-105 text-lg !h-15'>
                            <HeartOutlined className='text-2xl ' />
                        </Button>
                    </div>
                </div>

            </div>

        </>

    )
}



export default CardDetail