"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

// Định nghĩa kiểu dữ liệu
type StateType = {
  data: unknown[]; // Thay đổi kiểu nếu cần
};

type ActionType = { type: "SET_DATA"; payload: unknown[] };

// Reducer quản lý state
const dataReducer = (stateData: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "SET_DATA":
      return { ...stateData, data: action.payload };
    default:
      return stateData;
  }

};

// Tạo Context
const DataContext = createContext<{
  stateData: StateType;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

// Provider Component
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stateData, dispatch] = useReducer(dataReducer, { data: [] });

  useEffect(() => {
    const urlAPI = 'https://fakestoreapi.com/products';
    // Gọi API lấy dữ liệu
    axios.get(urlAPI)
      .then((response) => dispatch({ type: "SET_DATA", payload: response.data }))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return <DataContext.Provider value={{ stateData, dispatch }}>{children}</DataContext.Provider>;
};

// Hook để sử dụng dữ liệu
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
