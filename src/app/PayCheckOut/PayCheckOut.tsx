"use client";
import React, { useState } from 'react'
import DetailPage from '@/components/DetailPage/DetailPage'
// import CardUserCheckOut from '@/components/CardUserCheckOut/CardUserCheckOut'
import { useCart } from '../context/CartContext'
import { Button, Input, message } from "antd";



function PayCheckOut() {
    const { stateCart } = useCart();
    // const total: number = parseFloat((price * quantity).toFixed(4));

    const ProductTotal = () => {
        let productTotal: number = 0;
        stateCart.products.forEach((product) => {
            productTotal += product.quantity;
        });

        return productTotal;
    }

    const PriceTotal = () => {
        let priceTotal: number = 0;

        stateCart.products.map((product) => {
            priceTotal += parseFloat((product.price * product.quantity).toFixed(3));
        });

        return parseFloat(priceTotal.toFixed(2));

    }

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    const CheckOut = () => {
        try {
            const orderDetails = {
                id: Date.now(),
                customerName: name,
                customerPhone: phone,
                customerAddress: address,
                products: stateCart.products,
                totalQuantity: ProductTotal(),
                totalPrice: PriceTotal(),
                orderDate: ''
            };
            const orderDate = new Date().toLocaleDateString();
            orderDetails.orderDate = orderDate;

            // Save the order details to local storage
            const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
            existingOrders.push(orderDetails);
            localStorage.setItem('orders', JSON.stringify(existingOrders));

            message.success('Đặt hàng thành công!');

            // Clear the cart products in local storage
            localStorage.removeItem('cartProducts');

            window.location.href = '/Order';

        } catch {
            message.error('Đặt thất bại!!')
        }
    }

    return (
        <>
            <DetailPage name={'Thanh Toán'} address='Home' nameBack={"Giỏ Hàng"} />

            <div className=' w-full max-w-5xl h-auto m-auto 
                            last:mb-8 mt-5 border border-gray-300 
                             flex-col p-5 rounded-2xl mb-50'
            >
                <h1 className='mb-4'>THÔNG TIN ĐƠN HÀNG</h1>
                <div className=''>
                    <div className='flex w-full p-5 text-center'>
                        <div className='flex-2'>SẢN PHẨM</div>
                        <div className='flex-1'>GIÁ</div>
                        <div className='flex-1'>SỐ LƯỢNG</div>
                        <div className='flex-1'>THÀNH GIÁ</div>
                    </div>
                    {stateCart.products.map((product) => (
                        <div
                            key={product.id}
                            className={`w-full flex p-5 text-center ${stateCart.products.indexOf(product) % 2 === 0 ? 'bg-gray-100' : ''}`}
                        >
                            <span className='flex-2 text-start'>{product.title}</span>
                            <span className='flex-1'>$ {product.price}</span>
                            <span className='flex-1'>{product.quantity}</span>
                            <span className='flex-1 text-red-500'>
                                ${(product.price * product.quantity).toFixed(2)}
                            </span>
                        </div>
                    ))}
                    <div className='flex p-5 text-red-500 text-xl bg-amber-100'>
                        <div className='flex-3 text-start'>TỔNG</div>
                        <div className='flex-1 text-center'>
                            <span className=''>{ProductTotal()}</span>
                        </div>
                        <div className='flex-1 text-center'>
                            <span className=''>$ {PriceTotal()}</span>
                        </div>
                    </div>
                </div>
                <div className='m-5'>
                    <h1 className='mb-5'>
                        Thông tin khách hàng
                    </h1>
                    <div className='flex items-center mb-2 m-2'>
                        <span className='mr-2 w-32'>Tên</span>
                        <Input
                            className='flex-1'
                            placeholder='Nhập tên của bạn'
                            // value={"Thắng"}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center mb-2 m-2'>
                        <span className='mr-2 w-32'>Số Điện Thoại</span>
                        <Input
                            className='flex-1'
                            placeholder='Nhập số điện thoại của bạn'
                            // value={"0383758002"}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center m-2'>
                        <span className='mr-2 w-32'>Địa Chỉ</span>
                        <Input
                            className='flex-1'
                            placeholder='Nhập địa chỉ của bạn'
                            // value={"Quận 8, TP Hồ Chí Minh"}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex justify-end p-5'>
                    <Button
                        className={`mr-20 scale-120 
                                    ${!name || !phone || !address ? 'opacity-50 cursor-not-allowed'
                                : 'hover:!bg-green-700 hover:!text-white hover:!border-none hover:scale-125 !border-green-700 !text-green-700'}
                        `}

                        disabled={!name || !phone || !address}
                        onClick={() => {
                            CheckOut()

                        }}
                    >
                        Đặt Hàng
                    </Button>
                </div>

            </div>
        </>
    )
}

export default PayCheckOut