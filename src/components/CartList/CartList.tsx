"use client";
import React from 'react'
// import DetailPage from '../DetailPage/DetailPage'
// import { useData } from '@/app/context/DataContext'
// import { useCart } from '@/app/context/CartContext'
import Image from 'next/image'
import { Button } from 'antd'
import { useCart } from '@/app/context/CartContext';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import Link from 'next/link';

interface PropCartList {
    id: number,
    title: string,
    image: string,
    quantity: number,
    price: number,
    category: string
}

function CartList({ id, image, title, price, category, quantity }: PropCartList) {


    // const { state } = useCart()
    // console.log(state)
    // const ProductList = state.products
    // console.log(ProductList)
    const total: number = parseFloat((price * quantity).toFixed(2));
    // console.log(typeof total)
    const { dispatch } = useCart()

    const handleDeleteToCart = (productID: number) => {

        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { image: image, category: category, id: productID, title: title, price: price, quantity: 1 }
        });

        // console.log(typeof id)
    }
    const hanldeUpQuantity = (productID: number) => {

        dispatch({
            type: "PLUS_QUANTITY",
            payload: { image: image, category: category, id: productID, title: title, price: price, quantity: 1 }
        });

        // console.log(typeof id)
    }

    const hanldeDownQuantity = (productID: number) => {

        dispatch({
            type: "MINUS_QUANTITY",
            payload: { image: image, category: category, id: productID, title: title, price: price, quantity: 1 }
        });

        // console.log(typeof id)
    }

    return (
        <>
            <div className='w-full max-w-5xl h-auto m-auto 
                            last:mb-8 mt-5 border border-gray-300 flex flex-wrap 
                            rounded-2xl text-center items-center p-4 shadow-lg '
            >
                <div className='w-full flex flex-wrap sm:flex-nowrap justify-between items-center'>
                    <div className='w-full sm:w-1/6 flex justify-center mb-4 sm:mb-0'>
                        <Image
                            src={image || ""}
                            alt={title}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=''
                            style={{ width: '50%', height: 'auto' }}
                        />
                    </div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>
                        {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                    </div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center '>
                        {category}
                        <Link href={`/Detail/${id}`} className='flex  '>
                            <span className='m-auto text-blue-700'>Xem chi tiết</span>
                        </Link>
                    </div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>$ {price}</div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center  scale-130'>

                        <Button className={`scale-70 ${quantity <= 1 ? '!cursor-not-allowed !text-gray-400 !border-none' : 'hover:!text-black hover:!border-black'}`}
                            onClick={() => {
                                hanldeDownQuantity(id)
                            }}
                            disabled={quantity <= 1}
                        >
                            <MinusOutlined />
                        </Button>
                        <span className='bg-amber-100 h-auto w-10 inline-block text-center rounded-md'>
                            {quantity}
                        </span>
                        <Button className='scale-70 hover:!text-black hover:!border-black'
                            onClick={() => hanldeUpQuantity(id)}
                        >
                            <PlusOutlined />
                        </Button>
                    </div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center font-bold text-amber-700'>
                        $ {total}
                    </div>
                    <div className='w-full sm:w-1/6 flex justify-center'>
                        <Button className='scale-110 hover:!border-none 
                                 hover:!bg-red-500 hover:!text-white
                                 !border-red-500 !text-red-500
                                 '
                            onClick={() => {
                                handleDeleteToCart(id);

                            }
                            }
                        >
                            Xóa
                        </Button>



                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList