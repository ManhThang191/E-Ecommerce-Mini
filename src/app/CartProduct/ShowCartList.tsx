"use client";
import React from 'react'
import CartList from '@/components/CartList/CartList'
import DetailPage from '@/components/DetailPage/DetailPage';
import { useCart } from '../context/CartContext';


function ShowCartList() {
  const { state } = useCart();
  console.log(state.products);

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
      {state.products.length > 0 ? (
        state.products.map((product: any) => (
          <CartList
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
            quality={product.quantity}
            category={product.category}
          />
        ))
      ) : (
        <div className='w-full max-w-200 h-35 m-auto p-10 rounded-2xl bg-cyan-700 text-white text-2xl flex items-center justify-center text-center'>
          <span className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Không có sản phẩm nào trong giỏ hàng
          </span>
        </div>
      )}
    </>
  )
}

export default ShowCartList