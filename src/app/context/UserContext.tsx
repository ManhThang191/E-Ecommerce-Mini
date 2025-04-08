"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

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

    // thêm các thuộc tính khác nếu cần
}

interface RegisterAction {
    type: 'ADD_USER';
    payload: User;
}

interface UserContextType {
    users: User[] | null;
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}



const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]); // Khởi tạo state user với giá trị null

    useEffect(() => {
        // Gọi API lấy thông tin user
        const fetchUser = async () => {
            const urlAPIUser = 'https://fakestoreapi.com/users';
            try {
                const res = await axios.get<User[]>(urlAPIUser); // Gọi API, trả về một mảng user
                setUsers(res.data); // Lấy user đầu tiên trong mảng
                // console.log(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook để sử dụng dễ dàng
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
