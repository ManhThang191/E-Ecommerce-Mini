import React from 'react'
import DetailPage from '@/components/DetailPage/DetailPage'
// import Card from '@/components/Card/Card'
import '@/app/Detail/[id]/page.css'


function page({id :number, Card : Card}) {

  
  return (
    <>
        <DetailPage name = {'Chi Tiết Sản Phẩm'} />

        <div className='parent' 
            style={{
            width: '70%',
            height: '70vh',
            // backgroundColor: 'gray',
            display: 'grid',
            margin: 'auto',
            borderRadius: '10px',
        }}  >
            <div className='grid img'>img</div>
            <div className='grid title'>title</div>
            <div className='grid price'>price</div>
            <div className='grid detail'>detail</div>
            <div className='grid btn'>btn</div>

        </div>
    </>
  )
}

export default page