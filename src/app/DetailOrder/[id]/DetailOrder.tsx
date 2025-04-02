"use client";
import DetailPage from '@/components/DetailPage/DetailPage'
import { Button, message } from 'antd'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

function DetailOrder() {

    interface orderDetail {
        id: string;
        customerName: string;
        customerPhone: string;
        customerAddress: string;
        orderDate: string;
        totalQuantity: number;
        totalPrice: number;

        products: {
            id: number;
            title: string;
            quantity: number;
            price: number;
            image: string;
            category: string;
        }[];
    }
    const { id } = useParams();
    console.log(id) //=> string 

    const [orders, setOrders] = React.useState<orderDetail[]>([]);

    React.useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(storedOrders);
    }, []);

    console.log(orders) // => [{..} {..}]

    const orderDetail = orders.find((order: orderDetail) => (
        order.id == String(id)
    ));

    // console.log(orderDetail)  // => undefined

    const handleCancelOrder = () => {
        try {
            if (!orderDetail) return;

            const updatedOrders = orders.filter(order => order.id !== orderDetail.id);
            setOrders(updatedOrders);
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            message.success('Hủy thành công!')
        } catch {
            message.error('Hủy thất bại!')
        }

    };

    return (
        <>
            <DetailPage name={'Chi tiết đơn hàng'} nameBack={'Đơn Hàng'} address={'DetailOrder'} />

            <div className=' w-full max-w-5xl h-auto m-auto 
                            last:mb-8 mt-5 border border-gray-300 
                             flex-col p-5 rounded-2xl mb-50'
            >


                <h1 className='mb-4 border-b border-gray-300'>THÔNG TIN ĐƠN HÀNG : #{orderDetail ? orderDetail.id : 'N/A'}</h1>

                <div className='border-b border-gray-300 pb-5 pl-10'>
                    <span>Ngày : {orderDetail?.orderDate}</span> <br />
                    <span>Người Đặt : {orderDetail?.customerName}</span><br />
                    <span>SĐT : {orderDetail?.customerPhone}</span><br />
                    <span>Địa Chỉ : {orderDetail?.customerAddress}</span>
                </div>
                <div className=''>
                    <div className='flex w-full p-5 text-center'>
                        <div className='flex-2'>SẢN PHẨM</div>
                        <div className='flex-1'>GIÁ</div>
                        <div className='flex-1'>SỐ LƯỢNG</div>
                        <div className='flex-1'>THÀNH GIÁ</div>
                    </div>


                    {orderDetail?.products.map((product) => (
                        <React.Fragment key={product.id}>
                            <div className='flex w-full p-5 text-center border-t border-gray-300'>
                                <div className='flex-2 text-start'>{product.title}</div>
                                <div className='flex-1'>$ {product.price.toLocaleString()}</div>
                                <div className='flex-1'>{product.quantity}</div>
                                <div className='flex-1'>$ {(product.price * product.quantity).toLocaleString()}</div>
                            </div>
                        </React.Fragment>
                    ))}

                    <div className='flex w-full p-5 text-center border-t border-gray-300 bg-amber-50'>
                        <span className='flex-3'>TỔNG: </span>
                        <span className='flex-1'>{orderDetail?.totalQuantity}</span>
                        <span className='flex-1'>$ {orderDetail?.totalPrice}</span>
                    </div>
                    <div className='flex w-full p-5 text-center border-t border-gray-300'>
                        <div className='flex-4'>

                        </div>
                        <div className='flex-1'>
                            <Link href={'/Order'}>
                                <Button className='
                                    !text-red-600 !border-red-600
                                    hover:!bg-red-600 hover:!text-white
                                '
                                    onClick={() => {
                                        handleCancelOrder()
                                    }}

                                >
                                    Hủy Đơn
                                </Button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailOrder