"use client";
import clsx from "clsx";
import cn from "@/app/utility/cn";
import TypographyStyles from "./TypographyStyles";

import { Baloo_Da_2, Noto_Sans_Bengali } from "next/font/google";

const BalooDa2 = Baloo_Da_2({
  weight: ["400", "500", "700"],
  subsets: ["latin", "bengali"],
});
const NotoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"],
  subsets: ["bengali"],
});

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
  link: "p",
} as const;

export type TypographyProps = {
  variant?: keyof typeof variants | "body1"; // Add a default value
  className?: string;
  children: React.ReactNode | string;
};

const Typography = ({
  variant = "body1",
  className,
  children,
}: TypographyProps) => {
  const Component = variants[variant] || "p"; // Use "p" as default

  return (
    <Component className={cn(TypographyStyles[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
