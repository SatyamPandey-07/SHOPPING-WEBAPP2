import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    if (data) {
      setLoading(false);
      // Add fake purchase links (Amazon search link based on product title)
      data = data.map((product) => ({
        ...product,
        url: `https://www.amazon.com/s?k=${encodeURIComponent(product.title)}`,
      }));
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles height={"120"} width={"120"} color="#ff00ff" visible={true} />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-6 gap-6">
          {products.length > 0 ? (
            products.map((productItem) => (
              <ProductTile key={productItem.id} product={productItem} />
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">No products available.</p>
          )}
        </div>
      )}
    </div>
  );
}
