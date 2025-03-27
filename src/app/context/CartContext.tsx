"use client";
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    // description : string;
    image: string;
    category: string
}

interface CartState {
    products: Product[];
}

interface CartAction {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT' | 'CLEAR_CART' | 'PLUS_QUALITY' | 'MINUS_QUALITY';
    payload?: Product;
}
const savedCartProducts = localStorage.getItem('cartProducts');

const initialState: CartState = {
    products: savedCartProducts ? JSON.parse(savedCartProducts) : [],
};
console.log(initialState)
const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({
    state: initialState,
    dispatch: () => null,
});


const cartReducer = (state: CartState, action: CartAction): CartState => {
    let updatedProducts: Product[] = [];

    switch (action.type) {
        case 'ADD_PRODUCT':
            if (action.payload) {
                const existingProduct = state.products.find(product => product.id === action.payload!.id);
                updatedProducts = existingProduct
                    ? state.products.map(product =>
                        product.id === action.payload!.id
                            ? { ...product, quantity: product.quantity + action.payload!.quantity }
                            : product
                    )
                    : [...state.products, { ...action.payload, quantity: action.payload.quantity }];
            } else {
                updatedProducts = state.products;
            }
            break;

        case 'REMOVE_PRODUCT':
            if (action.payload) {
                updatedProducts = state.products.filter(product => product.id !== action.payload!.id);
            } else {
                updatedProducts = state.products;
            }
            // console.log(initialState)
            break;

        case 'CLEAR_CART':
            updatedProducts = [];
            break;
            
        case 'PLUS_QUALITY' :
            if (action.payload) {
                const existingProduct = state.products.find(product => product.id === action.payload!.id);
                updatedProducts = existingProduct
                    ? state.products.map(product =>
                        product.id === action.payload!.id
                            ? { ...product, quantity: product.quantity + action.payload!.quantity }
                            : product
                    )
                    : [...state.products, { ...action.payload, quantity: action.payload.quantity }];
            }
            break;

        case 'MINUS_QUALITY':
            if (action.payload) {
                const existingProduct = state.products.find(product => product.id === action.payload!.id);
                updatedProducts = existingProduct
                    ? state.products.map(product =>
                        product.id === action.payload!.id
                            ? { ...product, quantity: product.quantity - action.payload!.quantity }
                            : product
                    )
                    : [...state.products, { ...action.payload, quantity: action.payload.quantity }];
            }
            break;
        default:
            updatedProducts = state.products;
            break;
    }

    // Save updated products to localStorage
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    // console.log(initialState)
    return {
        ...state,
        products: updatedProducts,
        
    };

};

// console.log(initialState)


export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);