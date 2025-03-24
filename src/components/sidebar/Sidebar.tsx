"use client";
import React from 'react'
// import 'antd' from 'antd'
import { ShoppingCartOutlined, FileSearchOutlined, HeartOutlined, HomeOutlined, SearchOutlined, LoginOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import './sidebar.css'
import Link from "next/link";



function sidebar() {



    return (
        <nav className='p-4 pl-60 pr-60 text-2xl bg-cyan-900 text-white fixed top-0 left-0 right-0 z-50 align-middle w-full'>
            <ul className='list-none flex justify-between items-center'>


                <Link href={'/'}>
                    <li><div className='text-lg flex items-center'> <HomeOutlined className='mr-2' />Home</div> </li>       
                </Link>
                <li><a href="#" className='text-lg flex items-center'>
                    <FileSearchOutlined className='mr-1' />Đơn Hàng
                </a> </li>
                <li className="relative flex items-center">
                    <Input style={{ width: '300px' }} suffix={<SearchOutlined />} placeholder='Bạn muốn tìm gì?' />
                </li>

                <Link href={'/ProductFav'}>
                    <li className='text-lg flex items-center'><div><HeartOutlined className='mr-2' />Yêu Thích</div></li>
                </Link>


                {/* <li className='text-lg flex items-center'><a href="#"><HeartOutlined className='mr-2' />Yêu Thích</a></li> */}
                <li><a href="#" className='text-lg flex items-center'> <ShoppingCartOutlined className='mr-2' />Giỏ Hàng</a> </li>
                <li><a href="#" className='text-lg flex items-center'><LoginOutlined className='mr-2' />Login/Log out</a> </li>
            </ul>
        </nav>

    )
}

export default sidebar