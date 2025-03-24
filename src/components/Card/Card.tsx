import React from 'react'
import Image from 'next/image'
import logo from '@/app/Public/logo.png'
import { Button } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

function Card() {
    return (
        <div style={{
            objectFit: 'cover',
            width: '240px',
            height: 'auto',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            // alignItems: 'center'
        }}>
            <Image src={logo} alt="Logo"
                style={{
                    width: '90%',
                    height: 'auto',
                    margin: 'auto',
                    borderRadius: '10px',
                }} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'flex-start'
                borderRadius: '10px',
            }}>
                <h2 style={{
                    margin: '10px 0 10px 0',
                    maxHeight: '65px',
                    overflow: 'hidden',
                    font: 'bold 16px/1.5 sans-serif',
                }}>Dien Thoai Xiaomi Redmin 13</h2>
                <h1 style={{
                    color: 'red',
                    fontSize: '20px'
                }}>
                    Price
                </h1>
                <span style={{
                    overflow: 'hidden',
                    fontSize: '12px',
                    // textOverflow: 'ellipsis',
                    background: '#f1f1f1',
                    margin: '10px 0 10px 0',
                    borderRadius: '5px',
                    padding: '5px',
                    maxHeight: '60px',
                }}>
                    lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
                </span>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '5px',
                    margin: '10px 0 10px 0',
                }}>
                    <Button style={{ flex: 2 }}>
                        Mua Ngay
                    </Button>
                    <Button style={{ flex: 1 }}>
                        <ShoppingCartOutlined />
                    </Button>
                    <Button style={{ flex: 1 }}>
                        <HeartOutlined />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card