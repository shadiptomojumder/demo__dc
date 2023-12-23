"use client";
import cn from "@/app/utility/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, Children, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  
  

  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "p-4 rounded-[10px] flex gap-2 justify-center items-center font-medium leading-6 text-base transition-all ease-in-out duration-500",
  {
    variants: {
      variant: {
        primary: "text-white bg-[#2992F2]",
        outline:
          "text-[#2992F2] bg-transparent border-[1px] border-[#2992F2]/[0.6] hover:border-[#2992F2]/[1]",
        danger: "text-white bg-red-500 hover:bg-red-600",
      },
      size: {
        sm: "text-sm p-2",
        md: "text-base p-4",
        lg: "text-lg px-6 py-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
