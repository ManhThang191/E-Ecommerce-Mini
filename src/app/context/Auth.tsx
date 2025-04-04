"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Kiểu dữ liệu cho user
export interface User {
    id: string;
    name: {
        firstname: string;
        lastname: string;
    };
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

interface AuthContextType {
    currentUser: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Khi load app -> lấy user từ localStorage (nếu có)
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    // Hàm đăng nhập: setState và lưu vào localStorage
    const login = (user: User) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    // Hàm đăng xuất
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
