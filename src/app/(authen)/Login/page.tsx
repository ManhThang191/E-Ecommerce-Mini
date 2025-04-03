import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-lg">
                    <div className="text-center text-2xl font-bold mb-4">Đăng Nhập</div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Nhập email" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Mật khẩu</label>
                            <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Nhập mật khẩu" required />
                        </div>
                        {/* <p className="text-red-500 text-sm hidden">Vui lòng nhập đầy đủ thông tin!</p> */}
                        <Link href={'/'}>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                Đăng nhập
                            </button>

                        </Link>
                    </form>
                </div>
            </div>

        </>
    )
}

export default page