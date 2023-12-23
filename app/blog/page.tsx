
import React from "react";
import { Noto_Sans_Bengali } from "next/font/google";
import Button from "../components/Button/Button";
import { FaChevronRight } from "react-icons/fa";
import Calender from "../components/Calender/Calender";


const NotoBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"],
  subsets: ["bengali"],
});

const Blog = ({params}:any) => {
  console.log('The param is:',params);
  
  return (
    <div className={NotoBengali.className}>
      <h1 className="text-3xl font-bold mb-4 text-center py-5">
        This is Our Blog Page
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quae
        consequuntur alias beatae fuga expedita atque laudantium porro animi,
        perferendis magni saepe ipsa. Commodi quasi iusto aliquid consequuntur
        veniam aspernatur dolore sint ratione, quibusdam quis deleniti,
        veritatis molestias dolorum laboriosam tempora dolores, repellat minima
        non eum suscipit ducimus beatae nisi distinctio aperiam. Sed quas in,
        dolor illo cum nam rerum saepe quam libero fuga placeat ipsa modi est
        quisquam facilis harum assumenda ad accusamus architecto accusantium eum
        earum tenetur magni voluptatibus. Nemo animi magnam dolore? Distinctio
        eos, ullam animi aut fugiat itaque nobis sit deleniti dolore modi,
        voluptatem laboriosam quae odio provident. Quibusdam sint doloribus,
        dolor non tenetur officiis aut. Vitae odio necessitatibus quo,
        voluptates vel tempora officia ex accusamus totam fugiat?
      </p>
      <Calender></Calender>
    </div>
  );
};

export default Blog;
