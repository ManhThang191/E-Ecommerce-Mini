"use client";
import React from 'react'
import CartList from '@/components/CartList/CartList'
import DetailPage from '@/components/DetailPage/DetailPage';
import { useCart } from '@/app/context/CartContext';

import { Button } from 'antd';
import Link from 'next/link';

function ShowCartList() {
  const { stateCart } = useCart();
  // console.log(state.products);

  const ProductTotal = () => {
    let productTotal: number = 0;

    stateCart.products.forEach((product) => {
      productTotal += product.quantity;
    });

    return productTotal;
  }
  // console.log(ProductTotal())

  const PriceTotal = () => {
    let priceTotal: number = 0;

    stateCart.products.map((product) => {
      priceTotal += parseFloat((product.price * product.quantity).toFixed(3));
    });

    return parseFloat(priceTotal.toFixed(2));
  }
  return (
    <>
      <DetailPage name={'Sản Phẩm Trong Giỏ'} nameBack={'Home'} address={'Cart'} />
      <div className='text-white w-full max-w-5xl h-auto m-auto bg-cyan-700 flex p-4 sticky top-18 z-35 rounded-md overflow-hidden '>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Hình ảnh</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Tên</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Loại</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Giá</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Số Lượng</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Tổng Giá</div>
        <div className='w-full sm:w-1/6 mb-4 sm:mb-0 text-center'>Thao tác</div>
      </div>
      {stateCart.products.length > 0 ? (
        stateCart.products.map((product) => (
          <CartList
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            category={product.category}
          />
        ))

      ) : (
        <div className='w-full max-w-200 h-35 m-auto mt-10 p-10 rounded-2xl bg-cyan-700 text-white text-2xl flex items-center justify-center text-center'>
          <span className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Không có sản phẩm nào trong giỏ hàng !!!
          </span>
        </div>
      )
      }

      {stateCart.products.length > 0 ? (
        <>
          <div className='sticky bottom-0'>
            <div className=' w-full max-w-5xl flex flex-col sm:flex-row 
                        justify-between items-center text-center h-35 
                        m-auto p-10 rounded-2xl bg-cyan-900 text-white text-2xl mt-10 mb-10'>
              <div className='mb-4 sm:mb-0'>
                Tổng cộng ( <span className='text-amber-200'>{ProductTotal()}</span> sản phẩm ) : <span className='text-amber-200'>$ {PriceTotal()}</span>
              </div>

              <Link href={'/PayCheckOut'}>
                <Button className='mr-10 scale-130 !border-black 
                          hover:!scale-145 hover:!text-blue-800 '>
                  Đặt Hàng
                </Button>
              </Link>
            </div>
          </div >
        </>
      ) : (
        null
      )}
    </>
  )
}

export default ShowCartList