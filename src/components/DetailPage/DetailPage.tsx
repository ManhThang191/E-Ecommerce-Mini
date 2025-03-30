import React from 'react'
import { Button } from 'antd';
import { LeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link';

interface DetailPageProps {
  name: string;
  nameBack: string;
  address: string;
}

function DetailPage({ name, nameBack, address }: DetailPageProps) {
  return (
    <>
      <div className="bg-cyan-900 text-white p-4 rounded-md m-4 ml-2 mr-2 flex items-center sticky top-1 z-30">
        <h1>
          {name}
        </h1>
        {address !== "Home" ? (
          <>
            <div className="ml-auto">
              <Button className='hover:!text-black hover:!border-black'>
                <Link href={'/'} >
                  <LeftOutlined /> {nameBack}
                </Link>
              </Button>
            </div>
          </>
        ) : ("")}

        {address == "Home" ? (
          <>
            <div className="ml-auto">
              <Button className='hover:!text-black hover:!border-black'>
                <Link href={'/CartProduct'} >
                <ShoppingCartOutlined /> {nameBack}
                </Link>
              </Button>
            </div>
          </>
        ) : ("")}
      </div>
    </>
  )
}

export default DetailPage