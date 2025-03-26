"use client";
import React from 'react'
import DetailPage from '../DetailPage/DetailPage'
import { useData } from '@/app/context/DataContext'

function CartList() {

    const { state } = useData();
    console.log(state)
    console.log(state.data)

    const Product = state.data

    console.log(Product) // 20 {}...
    return (
        <>
            <DetailPage name={'Danh Sách Giỏ Hàng'} nameBack='Home' address='CartProduct' />

            <div className='w-300 h-200 m-auto bg-amber-200'>
                
            </div>
        </>
    )
}

export default CartList