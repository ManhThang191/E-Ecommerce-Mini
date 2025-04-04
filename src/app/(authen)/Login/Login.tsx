"use client";
import { useAuth } from '@/app/context/Auth';
import { useUser } from '@/app/context/UserContext';
import { Button, Input, message } from 'antd'
import React from 'react'

interface User {
    id: string;
    name: string;
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


function Login() {

    const { users } = useUser();
    // console.log(users);
    localStorage.setItem('userList', JSON.stringify(users));

    const [userName, setUsername] = React.useState<string>('');
    const [passWord, setPassword] = React.useState<string>('');
    const { login } = useAuth();


    const handleLogin = () => {

        const usersJSON = localStorage.getItem('userList');
        if (!usersJSON) {
            message.error('Không có dữ liệu người dùng!');
            return;
        }
        const usersData = JSON.parse(usersJSON);
        const matchedUser = usersData.find((user: User) => user.username === userName && user.password === passWord);
        // console.log(matchedUser);
        if (matchedUser) {
            // Nếu thông tin hợp lệ, lưu thông tin người dùng vào localStorage
            login(matchedUser);
            window.location.href = '/';
        } else {
            message.error('Tên đăng nhập hoặc mật khẩu không đúng!');
        }

        // Kiểm tra thông tin đăng nhập
        // try {
        //     usersData?.forEach((user) => {
        //         // console.log(user.username);
        //         if (user.username === userName && user.password === passWord) {
        //             // Nếu thông tin hợp lệ, chuyển hướng đến trang chính
        //             window.location.href = '/';
        //             localStorage.setItem('userLogin', JSON.stringify(''));

        //             return;
        //         }
        //     });

        // } catch {

        //     // message.error('Tên đăng nhập hoặc mật khẩu không đúng!');

        // }


    };



    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-lg">
                    <div className="text-center text-2xl font-bold mb-4">Đăng Nhập</div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Tên đăng nhập</label>
                            <Input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Nhập tên đăng nhập" required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Mật khẩu</label>
                            <Input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Nhập mật khẩu" required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* <p className="text-red-500 text-sm hidden">Vui lòng nhập đầy đủ thông tin!</p> */}

                        <Button className="!w-full !bg-blue-500 !text-white !text-lg  !py-2 !rounded-lg hover:!bg-blue-600"
                            onClick={() => (
                                handleLogin()

                            )}
                        >
                            Đăng nhập
                        </Button>


                    </form>
                </div>
            </div>

        </>
    )
}

export default Login