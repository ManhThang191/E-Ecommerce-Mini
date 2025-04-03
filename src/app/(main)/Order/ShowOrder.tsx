"use client";
import React from 'react'
import DetailPage from '@/components/DetailPage/DetailPage'
import { Button } from 'antd';
import Link from 'next/link';

function ShowOrder() {

    interface order {
        id: number;
        customerName: string;
        customerPhone: string;
        customerAddress: string;
        orderDate: string;
        totalQuantity: number;
        totalPrice: number;
        isDeliver: boolean;
        products: {
            id: number;
            title: string;
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



            <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h1>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-7 bg-gray-100 p-2 font-bold border-b border-gray-200">
                        <div className="p-2">Mã đơn</div>
                        <div className="p-2">Khách hàng</div>
                        <div className="p-2">Ngày đặt</div>
                        <div className="p-2">Số Lượng</div>
                        <div className="p-2">Tổng tiền</div>
                        <div className="p-2">Trạng thái</div>
                        <div className="p-2">Chi tiết</div>
                    </div>

                    {[...ListOrder].reverse().map((order: order) => (
                        <>
                            <div className="grid grid-cols-7 border-b border-gray-200 hover:bg-gray-50 p-2">
                                <div className="p-2">#{order.id}</div>
                                <div className="p-2">{order.customerName}</div>
                                <div className="p-2">{order.orderDate}</div>
                                <div className="p-2 text-green-600 ">{order.totalQuantity}</div>
                                <div className="p-2 text-red-600">$ {order.totalPrice}</div>
                                {order.isDeliver ? (
                                    <div className='p-2 text-orange-300'>Đang giao</div>
                                ) : (
                                    <div className='p-2 text-green-600'>Hoàn thành</div>

                                )}
                                <div className="p-2">
                                    <Link href={`/DetailOrder/${order.id}`}>
                                        <Button className="!bg-blue-500 !text-white px-3 !py-1 rounded">Xem</Button>
                                    </Link>
                                </div>
                            </div>

                        </>

                    ))}



                </div>
            </div>

        </>
    )
}

export default ShowOrder