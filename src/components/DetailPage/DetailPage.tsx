"use client";
import React from 'react'
import { Button } from 'antd';
import { LeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

interface DetailPageProps {
  name: string;
  nameBack: string;
  address: string;
}

function DetailPage({ name, nameBack, address }: DetailPageProps) {

  const { state } = useCart()
  const ProductTotal = () => {
    let productTotal: number = 0;
    state.products.forEach((product) => {
      productTotal += product.quantity;
    });
    return productTotal
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
            <div className="ml-auto">
              <Button className='hover:!text-black hover:!border-black'>
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