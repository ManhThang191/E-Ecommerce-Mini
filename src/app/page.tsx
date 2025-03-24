import Sidebar from "@/components/sidebar/Sidebar";
// import Card from "@/components/Card/Card";
import ProductList from "./context/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Sidebar/>
      <div className="w-full flex justify-center mt-40">
        <div className="pb-30">
          <ProductList />        
        </div>
      </div>
    </div>
  );
}
