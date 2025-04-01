"use client";
import React from 'react'
import DetailPage from '@/components/DetailPage/DetailPage'
import { Button } from 'antd';

function ShowOrder() {
    interface order {
        id: number;
        customerName: string;
        customerPhone: string;
        customerAddress: string;
        orderDate: string;
        totalQuantity: number;
        totalPrice: number;

        products: {
            id: number;
            name: string;
            quantity: number;
            price: number;
            image: string;
            category: string;
        }[];

    }
    const ListOrder = JSON.parse(localStorage.getItem('orders') || '[]');
    console.log(ListOrder)


    return (
        <>
            <DetailPage name={'Lịch Sử Đơn Hàng'} nameBack={'Home'} address={'OrderPage'} />

            {ListOrder.map((order: order) => (
                <>
                    <div className='max-w-250 min-h-50 m-auto p-2 rounded-xl
                                flex mb-10 border-1 bg-blue-50
                                '
                        key={order.id}
                    >
                        <div className='flex-2 p-5 '>
                            <h1 className=' text-2xl justify-between flex mb-5'>
                                ĐƠN HÀNG
                                <span className='text-xl mr-10'>{order.orderDate}</span>
                            </h1>
                            <div className='min-h-30'>
                                {order.products.map((product) => (
                                    <>
                                        <div className='flex mb-2 '>
                                            <span className='flex-4 mr-5'>
                                                - {product.name}
                                            </span>
                                            <span className='flex-1'>
                                                Sl : {product.quantity}
                                            </span>
                                            <span className='flex-1'>
                                                $ {product.price} / 1 SP
                                            </span>
                                        </div>
                                    </>
                                ))}

                            </div>
                            <div className='flex'>
                                <div className='flex-4 mr-5'>Tổng :</div>
                                <div className='flex-1'>Sl : {order.totalQuantity}</div>
                                <div className='flex-1 text-red-600'>$ {order.totalPrice}</div>
                            </div>
                        </div>
                        <div className='flex-1 flex-col p-5 h-full'>
                            <div className='flex-1 flex flex-col justify-between'>
                                <div className='w-full min-h-20 flex items-center'>
                                    <span>
                                        Từ :
                                    </span>
                                    <div className='ml-4'>
                                        Nhà cung cấp
                                    </div>
                                </div>
                                <div className='flex-1 min-h-40 max-h-45 flex flex-col justify-center'>
                                    <span>Đến : </span>
                                    <span>
                                        <ul className='ml-4'>
                                            <li>Địa Chỉ : {order.customerAddress}</li>
                                            <li>Tên : {order.customerName}</li>
                                            <li>SĐT : {order.customerPhone}</li>
                                        </ul>
                                    </span>
                                </div>
                                <div className='flex h-full mt-5 items-center'>
                                    <Button className='!m-auto hover:!text-white hover:!bg-red-400 hover:!border-red-400 hover:!scale-103 '>
                                        Hủy Đơn
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex-1'>
                            <span>
                                Tổng : $ {order.totalPrice}
                            </span>
                        </div> */}

                    </div>
                </>
            ))}


        </>
    )
}

export default ShowOrder