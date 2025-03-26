"use client";
import Card from "@/components/Card/Card";
import DetailPage from "@/components/DetailPage/DetailPage";

// import { useSearchParams } from "react-router-dom";
import { useData } from "./DataContext";
import { count } from "console";


const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // const urlAPI = 'https://fakestoreapi.com/products';

  // useEffect(() => {
  //   axios.get(urlAPI)
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const { state } = useData()

  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: number;
    category: string;
  }

  const productsList: Product[] = state.data as Product[]
  

  return (
    <>
      <DetailPage name={'Sản Phẩm'} nameBack="" address={'Home'} />
      <div className="list_product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {productsList.map((product) => (
          <Card
            key={product.id} 
            id={product.id} 
            title={product.title}
            price={product.price}
            image={product.image || ""}
            description={product.description}
            rating = {product.rating}
            category={product.category}
        
          />
        ))}
       
        
      </div>

    </>
  );
};

export default ProductList;
