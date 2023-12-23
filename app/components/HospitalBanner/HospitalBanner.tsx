import React from "react";
import { Noto_Sans_Bengali } from "next/font/google";
import Button from "../Button/Button";

const NotoBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"],
  subsets: ["bengali"],
});

const HospitalBanner = () => {
  return (
    <section>
      <div>
        <h2 className="text-[32px] mb-[24px]">
          আমাদের নিবন্ধিত বিশেষায়িত হাসপাতালগুলো সর্বদা আপনার সেবায় নিয়জিত
        </h2>
        <p className="text-[14px] mb-[24px]">
          আমাদের নিবন্ধিত হাসপাতাল থেকে সহজেয় সহজেই মানসম্পন্ন স্বাস্থ্যসেবা
          গ্রহণ করুন। আমাদের নিবন্ধিত হাসপাতালগুলি একাধিক শহর জুড়ে বিস্তৃত
          বিশেষত্ব, পরিষেবা সরবরাহ করে। আপনার সর্বোত্তম স্বাস্থ্যের দিকে যাত্রা
          শুরু হোক আমাদের যত্নের সাথে তালিকাভুক্ত হাসপাতালের সাথে।{" "}
        </p>
        <div className="p-[16px] text-[16px] leading-6 text-white bg-[#2992F2] mb-10">
          <span>হাসপাতাল / ডায়াগনস্টিক সেন্টার খুঁজুন</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_193_701)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7071 11.2932C15.8946 11.4807 15.9999 11.735 15.9999 12.0002C15.9999 12.2653 15.8946 12.5197 15.7071 12.7072L10.0501 18.3642C9.95785 18.4597 9.84751 18.5359 9.7255 18.5883C9.6035 18.6407 9.47228 18.6683 9.3395 18.6694C9.20672 18.6706 9.07504 18.6453 8.95215 18.595C8.82925 18.5447 8.7176 18.4705 8.6237 18.3766C8.52981 18.2827 8.45556 18.171 8.40528 18.0481C8.355 17.9252 8.32969 17.7936 8.33085 17.6608C8.332 17.528 8.35959 17.3968 8.412 17.2748C8.46441 17.1528 8.54059 17.0424 8.6361 16.9502L13.5861 12.0002L8.6361 7.05018C8.45394 6.86158 8.35315 6.60898 8.35542 6.34678C8.3577 6.08458 8.46287 5.83377 8.64828 5.64836C8.83369 5.46295 9.0845 5.35778 9.3467 5.35551C9.60889 5.35323 9.8615 5.45402 10.0501 5.63618L15.7071 11.2932Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_193_701">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Button></Button>
      </div>
      <div></div>
    </section>
  );
};

export default HospitalBanner;
