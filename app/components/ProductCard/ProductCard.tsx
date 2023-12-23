import Image from "next/image";
import Link from "next/link";
import React from "react";

interface dataType {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
}

const ProductCard = ({ product }: dataType) => {
  const { id, title, thumbnail, description } = product;

  return (
    <div className="flex flex-col justify-between group/edit border-2 hover:border-[#2C742F] rounded-lg group/item transition-all relative">
      <div className="w-14 h-14 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all invisible group-hover/edit:visible absolute top-4 right-4"></div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Link href="/">
          <Image
            src={thumbnail}
            placeholder="blur"
            blurDataURL="blur"
            alt="logo"
            width={500}
            height={250}
            className="rounded-lg"
          />
        </Link>
        {/* <img src={thumbnail} alt="logo" /> */}
      </div>
      <div className="flex justify-between p-3 items-center">
        <div>
          <Link href={`shop/${id}`}>
            <h2 className="text-[#4D4D4D] group-hover/item:text-[#2C742F] group-hover/item:font-semibold">
              {title}
            </h2>
          </Link>
          <p className="text-[##1A1A1A] font-medium">$52.256</p>
          <p className="text-[##1A1A1A] font-medium">{description}</p>
          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
