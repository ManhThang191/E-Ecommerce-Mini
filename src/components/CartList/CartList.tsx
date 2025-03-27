"use client";
import React from 'react'
// import DetailPage from '../DetailPage/DetailPage'
// import { useData } from '@/app/context/DataContext'
// import { useCart } from '@/app/context/CartContext'
import Image from 'next/image'
import { Button } from 'antd'
import { useCart } from '@/app/context/CartContext';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

interface PropCartList {
    id: number,
    title: string,
    image: string,
    quality: number,
    price: number,
    category: string
}

function CartList({ id, image, title, price, category, quality }: PropCartList) {

    // const { state } = useCart()
    // console.log(state)
    // const ProductList = state.products
    // console.log(ProductList)
    const total: number = price * quality;
    // console.log(typeof total)
    const { state, dispatch } = useCart()

    const handleDeleteToCart = (productID: number) => {

        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { image: image, category: category, id: productID, name: title, price: price, quantity: 1 }
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
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>{title}</div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>{category}</div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>$ {price}</div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center  scale-130'>
                        <Button className='scale-70 hover:!text-black hover:!border-black'>
                            <MinusOutlined />
                        </Button>
                        {quality}
                        <Button className='scale-70 hover:!text-black hover:!border-black'>
                            <PlusOutlined />
                        </Button>
                    </div>
                    <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center font-bold text-amber-700'>
                        $ {total}
                    </div>
                    <div className='w-full sm:w-1/6 flex justify-center'>
                        <Button className='scale-110 hover:!border-none 
                                 hover:!bg-red-500 hover:!text-white
                                 !border-red-500
                                 '
                            onClick={() => handleDeleteToCart(id)}
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