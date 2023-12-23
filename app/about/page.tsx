import React, { useState } from "react";
import Button from "../components/Button/Button";
import Image from "next/image";
import icon from "../../public/icon.png";
import Typography from "../components/Typography/Typography";
import { Baloo_Da_2, Noto_Sans_Bengali } from "next/font/google";
const BalooDa2 = Baloo_Da_2({
  weight: ["400", "500", "700"],
  subsets: ["latin", "bengali"],
});
const NotoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"],
  subsets: ["bengali"],
});

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center py-5">
        This is Our About Page
      </h1>
      <p className={BalooDa2.className}>
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

      <div className="flex justify-around">
        <Button variant="primary" className="m-4">
          অ্যাপয়েন্টমেন্ট বুক করুন
        </Button>
        <Button variant="outline" className="m-4 ">
          <Image src={icon} alt="logo" />
          জরুরী সহায়তা
        </Button>

        <Button className="m-4 ">Click me</Button>
        <Button className="m-4 bg-orange-500">Add</Button>
      </div>

      <div>
        <Typography variant="h1" className="text-red-500">
          আমাদের বিশেষজ্ঞ ডাক্তারদেরকে দেখুন
        </Typography>
        <Typography variant="subheading1" className="">
          বিশেষত্ব থেকে ডাক্তার খুঁজুন
        </Typography>
      </div>
    </div>
  );
};

export default About;
