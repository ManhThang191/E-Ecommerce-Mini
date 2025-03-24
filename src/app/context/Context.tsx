import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Định nghĩa cấu trúc của đối tượng Product
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

// Định nghĩa cấu trúc của giá trị context
interface ProductContextType {
    products: Product[];
}

// Tạo một context với giá trị khởi tạo là undefined
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Định nghĩa component ProductProvider
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // State để lưu danh sách sản phẩm
    const [products, setProducts] = useState<Product[]>([]);

    // Lấy danh sách sản phẩm từ API khi component được mount
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Cung cấp state products cho context
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};