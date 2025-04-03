"use client";
import React, { useEffect, useState } from 'react'
// import 'antd' from 'antd'
import { ShoppingCartOutlined, FileSearchOutlined, HeartOutlined, HomeOutlined, SearchOutlined, LoginOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { AutoComplete, Input, message } from 'antd';
import Link from "next/link";
import { useCart } from '@/app/context/CartContext';

import { useData } from '@/app/context/DataContext';


function Sidebar() {

    const { stateCart } = useCart();
    // console.log(state.products);

    const ProductTotal = () => {
        let productTotal: number = 0;
        stateCart.products.forEach((product) => {
            productTotal += product.quantity;
        });
        return productTotal
    }

    // const OrderTotal = () => {

    //     const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    //     return orders.length;
    // };
    const OrderTotal = () => {
        const [orderCount, setOrderCount] = useState(0);

        useEffect(() => {
            const updateOrderCount = () => {
                const orders = JSON.parse(localStorage.getItem('orders') || '[]');
                setOrderCount(orders.length);
            };

            // Gọi hàm ngay khi component mount
            updateOrderCount();

            // Theo dõi sự thay đổi của localStorage
            window.addEventListener('storage', updateOrderCount);

            // Dọn dẹp khi component unmount
            return () => {
                window.removeEventListener('storage', updateOrderCount);
            };
        }, [orderCount]);

        return orderCount;
    };

    const { stateData } = useData()
    // console.log(stateData.data)
    const suggestions: string[] = stateData.data.map((product: any) => (product.title))
    // console.log(suggestions)

    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const handleChange = (value: string) => {
        setInputValue(value);
        setOptions(
            value
                ? suggestions
                    .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
                    .map((item) => ({ value: item }))
                : []
        );
    };

    const FindProduct = (title: string) => {
        const product = stateData.data.filter((product: any) => product.title === title)
        console.log(product)

        const productElement = document.getElementById(`product-${(product[0] as { id: string }).id}`);
        console.log(productElement)
        if (productElement) {
            productElement.scrollIntoView({ behavior: "smooth", block: "center" });
            productElement.style.transition = "background-color 0.5s ease";
            productElement.style.backgroundColor = "#FFFFCC";

            setTimeout(() => {
                productElement.style.backgroundColor = "";
            }, 1500);
        } else {
            message.warning("Không tìm thấy sản phẩm!");
        }
    }



    return (
        <>
            {/* <div className='w-full h-20'

            ></div> */}
            <nav className='p-3 pl-20 pr-20 text-2xl bg-cyan-900 text-white  top-0 left-0 right-0 z-50 w-full shadow-xl relative'>
                <ul className='list-none flex flex-wrap justify-between items-center'>

                    <Link href={'/'}>
                        <li><div className='text-lg flex items-center hover:text-amber-400'> <HomeOutlined className='mr-2' />Home</div> </li>
                    </Link>

                    <Link href={'/Order'}>
                        <li><div className='text-lg flex items-center hover:text-amber-400 relative'>
                            <FileSearchOutlined className='mr-1' />
                            <span>

                                Đơn Hàng
                            </span>
                            <span className='absolute bg-red-500 text-white -top-1 -right-4
                                        text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                {OrderTotal()}
                            </span>
                        </div> </li>

                    </Link>

                    <li className="relative flex items-center w-full md:w-auto">
                        <AutoComplete
                            options={options}
                            value={inputValue}
                            onChange={(e) => handleChange(e)}
                            onSelect={(value) => FindProduct(value)}
                        >
                            <Input
                                className='w-full md:w-80'
                                suffix={<SearchOutlined />}
                                placeholder='Bạn muốn tìm gì?'
                            />


                        </AutoComplete>
                    </li>

                    <Link href={'/ProductFav'}>
                        <li ><div className='text-lg flex items-center hover:text-amber-400'><HeartOutlined className='mr-2' />Yêu Thích</div></li>
                    </Link>

                    <Link href={'/CartProduct'}>
                        <li>
                            <div className='text-lg flex items-center hover:text-amber-400 relative'>
                                <ShoppingCartOutlined className='mr-2' />
                                <span>
                                    Giỏ Hàng
                                </span>
                                <span className='absolute bg-red-500 text-white -top-1 -right-4
                                        text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                    {ProductTotal()}
                                </span>
                            </div>
                        </li>

                    </Link>
                    <li>
                        {/* <a href="#" className='text-lg flex items-center'>
                            <LoginOutlined className='mr-2' />
                            Login
                        </a> */}

                        <Link href={'/Login'}>
                            <div className='text-lg flex items-center hover:text-amber-400'>
                                <LoginOutlined className='mr-2' />
                                Log out
                            </div>

                        </Link>
                    </li>
                </ul>

            </nav>



        </>

    )
}

export default Sidebar