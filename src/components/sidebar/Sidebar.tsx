"use client";
import React from 'react'
// import 'antd' from 'antd'
import { ShoppingCartOutlined, FileSearchOutlined, HeartOutlined, HomeOutlined, SearchOutlined, LoginOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import Link from "next/link";



function sidebar() {


    return (
        <>
            <div className='w-full h-20'

            ></div>
            <nav className='p-7 pl-20 pr-20 text-2xl bg-cyan-900 text-white fixed top-0 left-0 right-0 z-50 w-full shadow-xl'>
                <ul className='list-none flex flex-wrap justify-between items-center'>

                    <Link href={'/'}>
                        <li><div className='text-lg flex items-center hover:text-amber-400'> <HomeOutlined className='mr-2' />Home</div> </li>
                    </Link>
                    <li><a href="#" className='text-lg flex items-center'>
                        <FileSearchOutlined className='mr-1' />Đơn Hàng
                    </a> </li>

                    <li className="relative flex items-center w-full md:w-auto">
                        <Input className='w-full md:w-72' suffix={<SearchOutlined />} placeholder='Bạn muốn tìm gì?' />
                    </li>

                    <Link href={'/ProductFav'}>
                        <li ><div className='text-lg flex items-center hover:text-amber-400'><HeartOutlined className='mr-2' />Yêu Thích</div></li>
                    </Link>

                    <li><a href="#" className='text-lg flex items-center'> <ShoppingCartOutlined className='mr-2' />Giỏ Hàng</a> </li>
                    <li><a href="#" className='text-lg flex items-center'><LoginOutlined className='mr-2' />Login/Log out</a> </li>
                </ul>
            </nav>

        </>

    )
}

export default sidebar