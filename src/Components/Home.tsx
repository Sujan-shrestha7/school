import React from "react";
import Header from "./Header";
import homeimg from "../assets/images/home.jpg";
import homevideo from "../assets/videos/video.mp4";

const events = [
  {
    title: "EVENTS / NOTICE",
    img: homeimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores. Laboriosam quaerat dolorem inventore velit nesciunt unde! Corrupti eum iste ea vel ex tenetur expedita animi similique optio hic nam error veritatis ratione quam.",
  },
  {
    title: "NEWS",
    img: homeimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores. Laboriosam quaerat dolorem inventore velit nesciunt unde! Corrupti eum iste ea vel ex tenetur expedita animi similique optio hic nam error veritatis ratione quam.",
  },
];

const Home = () => {
  return (
    <div>
      <Header />

      {/* Video Section */}
      <div className="relative w-full h-[500px] md:h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={homevideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#fcb040] text-3xl md:text-5xl font-bold text-center px-4">
            Go Forward! MOVE FORWARD!!
          </h1>
        </div>
      </div>

      {/* Events / News Section */}
      <div className="my-16 px-4 md:px-20 flex flex-col md:flex-row gap-10 justify-center">
        {events.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col gap-4">
            <h2 className="font-semibold text-xl text-[#10507a]">
              {item.title}
            </h2>
            <div className="flex gap-4">
              <img
                src={item.img}
                alt={`${item.title} Image`}
                className="h-24 w-32 object-cover rounded"
              />
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
