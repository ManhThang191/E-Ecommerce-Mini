"use client";
import { Button, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


function Register() {

    interface User {
        id: string;
        name: {
            firstname: string;
            lastname: string;
        }
        email: string;
        password: string;
        phone: string;
        address: {
            city: string;
            street: string;
            number: string;
            zipCode: string;
        };
        image: string;
        username: string;
    }
    const router = useRouter();

    const handleRegister = () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;

        if (password !== confirmPassword) {
            // alert('Mật khẩu không khớp!');
            message.error('Mật khẩu không khớp!');
            return;
        }

        const newUser: User = {
            id: Date.now().toString(),
            name: {
                firstname: '',
                lastname: ''
            },
            email,
            password,
            phone: '',
            address: {
                city: '',
                street: '',
                number: '',
                zipCode: ''
            },
            image: '',
            username,
        };

        // Lưu thông tin người dùng vào localStorage
        const usersJSON = localStorage.getItem('userList');
        let usersData: User[] = [];
        if (usersJSON) {
            usersData = JSON.parse(usersJSON);
        }
        usersData.push(newUser);
        localStorage.setItem('userList', JSON.stringify(usersData));

        // alert('Đăng ký thành công!');
    }
    const handleSubmit = () => {
        // event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // Gọi hàm đăng ký
        handleRegister();
        message.success('Đăng ký thành công!');
        // window.location.href = '/Login';
        router.push('/Login');

    };
    return (
        <>
            <div className="bg-gray-100 h-screen flex items-center justify-center">

                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Đăng Ký Tài Khoản</h2>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label for="name" className="block text-sm font-medium text-gray-700">
                                Tên đăng nhập
                            </label>
                            <input type="text" id="username" name="username" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        {/* <div className="mb-4">
                            <label for="first_name" className="block text-sm font-medium text-gray-700">
                                Họ
                            </label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label for="second_name" className="block text-sm font-medium text-gray-700">
                                Tên Đệm + Tên
                            </label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div> */}

                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        <div className="mb-4">
                            <label for="password" className="block text-sm font-medium text-gray-700">
                                Mật khẩu
                            </label>
                            <input type="password" id="password" name="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        <div className="mb-4">
                            <label for="confirm-password" className="block text-sm font-medium text-gray-700">
                                Xác nhận mật khẩu
                            </label>
                            <input type="password" id="confirm-password" name="confirm-password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="agree" name="agree" required className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label for="agree" className="ml-2 text-sm text-gray-700">
                                Tôi đồng ý với
                                <a href="#" className="text-indigo-600 ml-2">
                                    Điều khoản sử dụng
                                </a>
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <Button onClick={() => (handleSubmit())} type="submit" className="!w-full !bg-indigo-600 !text-white !p-2 !rounded-md hover:!bg-indigo-700 !transition !duration-300">
                                Đăng Ký
                            </Button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Bạn đã có tài khoản?
                        <Link href="/Login" className="!text-indigo-600 ml-1">
                            Đăng nhập
                        </Link>

                    </p>
                </div>

            </div>

        </>
    )
}

export default Register