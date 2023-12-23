import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center py-5">
        This is Our Contact Page
      </h1>

      {/* OUR SERVICE SECTION */}
      <section>
        <div className="mb-[54px]">
          <h2 className="text-[#343434] text-2xl text-center font-medium leading-9 mb-1">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-[#4D4D4D] text-base text-center font leading-6">
            আমাদের বিস্তীর্ণ স্বাস্থ্যসেবা পরিষেবাগুলি দেখুন
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-between items-start gap-6 p-6 border border-[#DCDCDC] rounded-lg">
            <div>
              <Image
                src="./icons/service__1.svg"
                width="60"
                height="60"
                alt="service logo"
              />
              <h2 className="text-[#3F3F3F] text-xl font-semibold mt-3 mb-[10px]">
                বিশেষজ্ঞ ডাক্তার
              </h2>
              <p className="text-sm text-[#4D4D4D] lead-[21px] pb-5">
                আপনার অনন্য স্বাস্থ্য চাহিদা মেটাতে বিশেষ দক্ষতা সহ বিভিন্ন
                ধরণের ডাক্তারের সন্ধান করুন। পরামর্শ থেকে অ্যাপয়েন্টমেন্ট
                পর্যন্ত, ব্যক্তিগতকৃত যত্নের জন্য সঠিক দক্ষতা খুঁজুন।
              </p>
            </div>
            {/* <Link href="/">
              <ShortLink className="p-0">ডাক্তারদের দেখুন</ShortLink>
            </Link> */}
          </div>
          <div className="service__card flex flex-col justify-between items-start gap-6 p-6 border border-[#DCDCDC] rounded-lg">
            <div>
              <Image
                src="./icons/service__1.svg"
                width="60"
                height="60"
                alt="service logo"
              />
              <h2 className="text-[#3F3F3F] text-xl font-semibold mt-3 mb-[10px]">
                বিশেষজ্ঞ ডাক্তার
              </h2>
              <p className="text-sm text-[#4D4D4D] lead-[21px]">
                আপনার অনন্য স্বাস্থ্য চাহিদা মেটাতে বিশেষ দক্ষতা সহ বিভিন্ন
                ধরণের ডাক্তারের সন্ধান করুন। পরামর্শ থেকে অ্যাপয়েন্টমেন্ট
                পর্যন্ত, ব্যক্তিগতকৃত যত্নের জন্য সঠিক দক্ষতা খুঁজুন।
              </p>
            </div>
            {/* <Link href="/">
              <ShortLink className="p-0">ডাক্তারদের দেখুন</ShortLink>
            </Link> */}
          </div>
          <div className="service__card flex flex-col justify-between items-start gap-6 p-6 border border-[#DCDCDC] rounded-lg">
            <div>
              <Image
                src="./icons/service__1.svg"
                width="60"
                height="60"
                alt="service logo"
              />
              <h2 className="text-[#3F3F3F] text-xl font-semibold mt-3 mb-[10px]">
                বিশেষজ্ঞ ডাক্তার
              </h2>
              <p className="text-sm text-[#4D4D4D] lead-[21px]">
                আপনার অনন্য স্বাস্থ্য চাহিদা মেটাতে বিশেষ দক্ষতা সহ বিভিন্ন
                ধরণের ডাক্তারের সন্ধান করুন। পরামর্শ থেকে অ্যাপয়েন্টমেন্ট
                পর্যন্ত, ব্যক্তিগতকৃত যত্নের জন্য সঠিক দক্ষতা খুঁজুন।
              </p>
            </div>
            {/* <Link href="/">
              <ShortLink className="p-0">ডাক্তারদের দেখুন</ShortLink>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
