import React from 'react'
// import { useParams } from 'next/navigation';
import DetailPage from '@/components/DetailPage/DetailPage';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, message } from 'antd';
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'
import { useCart } from '@/app/context/CartContext';

import Link from 'next/link';


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
    quantity: number;
}


function CardDetail({ id, title, price, image, description, category, rating: { rate, count } }: CardProps) {


    const { dispatch } = useCart()

    const handleAddToCart = (productID: number) => {

        try {
            dispatch({
                type: "ADD_PRODUCT",
                payload: { image: image, category: category, id: productID, title: title, price: price, quantity: 1 }
            });
            message.success('Đã thêm vào giỏ hàng!!')

        } catch {
            message.error('Thêm thất bại!!')
        }

        // console.log(typeof id)
    }
    const [quantity, setQuantity] = React.useState<number>(1);

    const hanldeDownQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }
    const hanldeUpQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    React.useEffect(() => {
        const savedQuantity = localStorage.getItem(`product_${id}_quantity`);
        if (savedQuantity) {
            setQuantity(Number(savedQuantity));
        }
    }, [id]);

    React.useEffect(() => {
        localStorage.setItem(`product_${id}_quantity`, quantity.toString());
    }, [id, quantity]);


    return (

        <>
            <DetailPage name={'Chi Tiết Sản Phẩm'} nameBack={'Home'} address={'Detail'} />

            {/* <div className='m-auto w-250 h-130 flex text-center rounded-xl border-0 overflow-hidden shadow-lg' > */}
            <div className='m-auto w-full max-w-[1000px] h-auto flex mt-20 flex-col md:flex-row text-center rounded-xl border-0 overflow-hidden shadow-lg'>

                {/* <div className='flex-1 w-full h-full relative'> */}
                <div className='w-full md:w-1/2 h-64 md:h-auto relative'>
                    <Image
                        src={image || ""}
                        alt={title}
                        layout='fill'
                        objectFit='contain'
                        loader={({ src }) => src}
                        className=' p-2'
                    />
                </div>
                {/* <div className='flex-1 flex-col w-full h-full '> */}
                <div className='w-full md:w-1/2 flex flex-col'>

                    <div className=' flex items-center justify-center p-5 text-xl bg-cyan-800 text-amber-50' style={{ height: '20%' }}>{title}</div>
                    <div className=' flex items-center justify-around text-3xl text-red-700' style={{ height: '20%' }}>
                        <div className=''>
                            Price : $ {price}

                        </div>
                        <div>
                            <span className='text-amber-500'> {rate}  <StarOutlined /> </span>
                            <span className='text-black'>( {count} )</span>
                        </div>
                    </div>
                    <div className=' flex flex-col items-start pl-5 pr-5  ' style={{ height: '35%' }}>
                        <div className='mb-3'>
                            <span>
                                Category : {category}
                            </span>
                        </div>
                        <div className='flex items-start w-full max-h-52 overflow-y-auto'>
                            <span className='text-left break-words'>
                                {description}
                            </span>
                        </div>

                    </div>


                    {/* <div className=' flex items-center justify-center' style={{ height: '25%' }}> */}
                    <div className='flex flex-col md:flex-row items-center justify-center gap-3 px-4 py-4'>


                        <div className='scale-150 w-40 mr-5'>
                            <Button className={`scale-70 ${quantity <= 1 ? '!cursor-not-allowed !text-gray-400 !border-none' : 'hover:!text-black hover:!border-black'}`}
                                onClick={() => {
                                    hanldeDownQuantity()
                                }}
                                disabled={quantity <= 1}
                            >
                                <MinusOutlined />
                            </Button>
                            <span className='bg-amber-100 h-auto w-10 inline-block text-center rounded-md'>
                                {quantity}
                            </span>
                            <Button className='scale-70 hover:!text-black hover:!border-black'
                                onClick={() => hanldeUpQuantity()}
                            >
                                <PlusOutlined />
                            </Button>
                        </div>

                        <Link href={`/BuyNow/${id}`}>
                            <Button className='flex-2 m-3 p-6 !bg-cyan-700 !text-white 
                                            hover:bg-cyan-800 rounded-lg !h-15
                                            hover:transform hover:scale-105  hover:!text-amber-200 text-lg'>
                                <p className='text-2xl'>
                                    Mua Ngay
                                </p>
                            </Button>
                        </Link>

                        <Button className='flex-1 m-3 max-w-20 p-6 hover:transform hover:!scale-110 hover:!border-none
                                         hover:!bg-green-200 hover:!text-black text-lg !h-15'
                            onClick={() => {
                                handleAddToCart(id);
                            }}
                        >
                            <ShoppingCartOutlined className='text-2xl'

                            />
                        </Button>
                    </div>
                </div>
            </div>


        </>

    )
}



export default CardDetail