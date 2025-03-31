// "use client";
import ProductList from "./context/ProductList";



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
