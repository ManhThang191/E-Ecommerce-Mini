import React from 'react'
// import { useParams } from 'next/navigation';
import DetailPage from '@/components/DetailPage/DetailPage';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';


interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };

}


function CardDetail({ id, title, price, image, description, category, rating }: CardProps) {
    
    return (
        <>
            <DetailPage name={'Chi Tiết Sản Phẩm' } />
            <div className='m-auto w-250 h-130 bg-amber-200 flex text-center rounded-xl'
            
            >
                <div className='flex-1 w-full h-full '>
                    img

                </div>
                <div className='flex-1 flex-col w-full h-full bg-red-200'>
                    <div className='bg-amber-100 flex-1 min-h-20'>1 {title}</div>
                    <div className='bg-amber-200 flex-3 min-h-15'>2</div>
                    <div className='bg-amber-300 flex-2 min-h-40'>3</div>
                    <div className='bg-amber-400 flex-1'>4</div>
                </div>

            </div>

        </>

    )
}

  

export default CardDetail