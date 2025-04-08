"use client";
import { useAuth } from '@/app/context/Auth'
import { Button } from 'antd';
import React from 'react'

function Profile() {

    const { currentUser } = useAuth();

    if (!currentUser) {
        return <div className="text-center mt-20">Vui lòng đăng nhập để xem thông tin tài khoản.</div>;
    }
    return (
        <>
            <div className="bg-white shadow-xl h-auto rounded-2xl p-6 max-w-md w-full space-y-4 m-auto mt-20">
                <h2 className="text-xl font-bold text-center text-gray-800">Thông tin tài khoản</h2>

                <div>
                    <span className="block text-gray-600 font-semibold">Họ tên:</span>
                    <span className="text-gray-800">{currentUser.name.firstname} {currentUser.name.lastname}</span>
                </div>

                <div>
                    <span className="block text-gray-600 font-semibold">Tên đăng nhập:</span>
                    <span className="text-gray-800">{currentUser.username}</span>
                </div>
                <div>
                    <span className="block text-gray-600 font-semibold">Mật khẩu:</span>
                    <span className="text-gray-800">{currentUser.password}</span>
                </div>

                <div>
                    <span className="block text-gray-600 font-semibold">Email:</span>
                    <span className="text-gray-800">{currentUser.email}</span>
                </div>

                <div>
                    <span className="block text-gray-600 font-semibold">Số điện thoại:</span>
                    <span className="text-gray-800">{currentUser.phone}</span>
                </div>

                <div>
                    <span className="block text-gray-600 font-semibold">Địa chỉ:</span>
                    <span className="text-gray-800">
                        {currentUser?.address.number}, {currentUser?.address.street}, {currentUser?.address.city}

                    </span>
                </div>

                <div>
                    <Button

                        className='!m-auto !block !bg-blue-500 hover:!bg-blue-600 !text-white !font-bold   !rounded !focus:outline-none !focus:shadow-outline'>
                        Chỉnh sửa
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Profile