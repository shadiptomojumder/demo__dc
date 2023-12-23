import { Baloo_Da_2, Noto_Sans_Bengali } from "next/font/google";
const BalooDa2 = Baloo_Da_2({
    weight: ["400", "500", "700"],
    subsets: ["latin", "bengali"],
  });

const NotoSansBengali = Noto_Sans_Bengali({
    weight: ["400", "500", "700"],
    subsets: ["bengali"],
  });

const typographyVariants = {
    h1: `text-6xl ${BalooDa2.className}`,
    h2: `text-5xl ${BalooDa2.className}`,
    h3: `text-4xl ${BalooDa2.className}`,
    h4: `text-3xl ${BalooDa2.className}`,
    h5: `text-2xl`,
    h6: `text-1xl`,
    subheading1: `text-base leading-6 font-normal ${NotoSansBengali.className}`,
    subheading2: `text-1xl font-semibold`,
    body1: "text-base",
    body2: "text-base font-bold",
    link: "text-xs text-primaryViolet uppercase underline font-bold",
  };

  export default typographyVariants;