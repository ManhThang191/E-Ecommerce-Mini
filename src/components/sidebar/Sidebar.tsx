"use client";
import React, { useState } from 'react'
// import 'antd' from 'antd'
import { ShoppingCartOutlined, FileSearchOutlined, HeartOutlined, HomeOutlined, SearchOutlined, LoginOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd';
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

    const OrderTotal = () => {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        return orders.length;
    };

    const { stateData } = useData()
    // console.log(stateData.data)
    const suggestions: string[] = stateData.data.map((product: any) => (product.title))
    console.log(suggestions)

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

    }
    return (
        <>
            {/* <div className='w-full h-20'

            ></div> */}
            <nav className='p-3 pl-20 pr-20 text-2xl bg-cyan-900 text-white  top-0 left-0 right-0 z-50 w-full shadow-xl'>
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
                            onChange={handleChange}
                        >
                            <Input className='w-full md:w-72' suffix={<SearchOutlined />} placeholder='Bạn muốn tìm gì?'

                            >

                            </Input>

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
                    <li><a href="#" className='text-lg flex items-center'><LoginOutlined className='mr-2' />Login/Log out</a> </li>
                </ul>
            </nav>

        </>

    )
}

export default Sidebar