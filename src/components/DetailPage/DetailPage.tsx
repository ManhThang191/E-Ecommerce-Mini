"use client";
import React from 'react'
import { Button, message, Select } from 'antd';
import { LeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { useData } from '@/app/context/DataContext';


interface DetailPageProps {
  name: string;
  nameBack: string;
  address: string;
}


function DetailPage({ name, nameBack, address }: DetailPageProps) {
  const { stateCart } = useCart()
  const ProductTotal = () => {
    let productTotal: number = 0;
    stateCart.products.forEach((product) => {
      productTotal += product.quantity;
    });
    return productTotal
  }

  const { dispatch } = useData()
  const getAPI = async (value: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products${value !== 'all' ? `/category/${value}` : ''}`);
      const data = await response.json();
      // Assuming you have a dispatch function in your CartContext to update the state
      dispatch({ type: 'SET_DATA', payload: data });
    } catch (error) {
      console.error('Error fetching API:', error);
      message.error('Thất bại!')
    }
  }

  return (
    <>
      <div className="bg-cyan-900 text-white p-4 rounded-md m-4 ml-2 mr-2 flex items-center sticky top-1 z-30">
        <h1>
          {name}
        </h1>


        {address !== "Home" && address !== "DetailOrder" ? (
          <>
            <div className="ml-auto">
              <Button className='hover:!text-black hover:!border-black'>
                <Link href={'/'} >
                  <LeftOutlined /> {nameBack}
                </Link>
              </Button>
            </div>
          </>
        ) : ("")

        }

        {address == "DetailOrder" ? (
          <>
            <div className="ml-auto">

              <Button className='hover:!text-black hover:!border-black'>
                <Link href={'/Order'} >
                  <LeftOutlined /> {nameBack}
                </Link>
              </Button>
            </div>
          </>
        ) : (null)}

        {address == "Home" ? (
          <>
            <div className="ml-auto flex items-center space-x-4">
              <div>
                {/* <Input className='w-full md:w-72' suffix={<FilterOutlined />} placeholder='Tìm theo phân loại?' /> */}
                <Select
                  placeholder={'Tìm theo Loại'}
                  onChange={(value) => (
                    getAPI(value)
                  )}
                  className='w-full md:w-40'
                >
                  <Select.Option value="all">All</Select.Option>
                  <Select.Option value="men&#39;s clothing">Men&#39;s Clothing</Select.Option>
                  <Select.Option value="jewelery" >Jewelery</Select.Option>
                  <Select.Option value="electronics" >Electronics</Select.Option>
                  <Select.Option value="women&#39;s clothing" >Women&#39;s Clothing</Select.Option>
                </Select>
              </div>

              <Button className='hover:!text-black hover:!border-black relative'>
                <Link href={'/CartProduct'} >
                  <ShoppingCartOutlined /> {nameBack}
                </Link>
                <span className='absolute bg-red-500 text-white -top-3 -right-2
                       text-xs rounded-xl w-5 h-5 flex items-center justify-center'>
                  {ProductTotal()}
                </span>
              </Button>
            </div>
          </>
        ) : ("")}
      </div>
    </>
  )
}

export default DetailPage