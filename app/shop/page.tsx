"use client";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

// ei page ta open koren
interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand:string
}

const fetchData = async () => {
  const res = axios.get("https://dummyjson.com/products");
  const data = (await res).data.products;
  return data;
};

const Shop = () => {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 5 * 10000,
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>There are a Error...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center py-5">
        This is Our Shop Page
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae
        consequuntur alias beatae fuga expedita atque laudantium porro animi,
        perferendis magni saepe ipsa. Commodi quasi iusto aliquid consequuntur
        voluptates vel tempora officia ex accusamus totam fugiat?
      </p>

      <h2 className="text-lg font-bold text-center">Our Products</h2>

      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 sm:p-0 p-4">
          <h2 className="sm:text-[32px] text-[22px] text-[#1A1A1A] font-semibold sm:max-w-none max-w-[200px]">
            Browse items by category <span></span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 sm:p-0 p-4">
          {products.map((product: product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product:product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.thumbnail}
                    alt="logo"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href='/'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.brand}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    $ {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
