"use client";
import React from "react";
import axios from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Apple = ({ params }:{params:{id:number}}) => {
  const id = params.id;

  const fetchData = async () => {
    const res = await axios(`https://dummyjson.com/products/${id}`);
    const data = await res.data;
    return data;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchData,
    staleTime: 5 * 10000,
  });
  console.log(params.id, product);

  if (isLoading) {
    return (
      <div className="text-3xl h-screen flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }
  if (error) {
    return <p>There are a Error...{error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold">This is the product details page</h2>
      <div className="flex justify-between  mt-20">
        <div>
          <Image
            src={product.thumbnail}
            alt="lofo"
            width={500}
            height={500}
          ></Image>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
          <p className="font-bold">Brand:{product.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Apple;
