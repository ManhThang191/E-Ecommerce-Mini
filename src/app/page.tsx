"use client";
// import Sidebar from "@/components/sidebar/Sidebar";
// import Card from "@/components/Card/Card";
import ProductList from "./context/ProductList";
// import { BrowserRouter } from "react-router-dom";
// import { use } from "react";


export default function Home() {
  return (
    <>
          <div className="min-h-screen w-full">
            <div className="w-full flex justify-center">
              <div className="pb-20">
                <ProductList />        
              </div>
            </div>
          </div>
      </>
    
  );
}
