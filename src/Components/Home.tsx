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
        <div className="relative w-full h-[500px] md:h-screen">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={homevideo} type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col gap-y-[20px] items-center justify-center">
            <h1 className="text-[#fcb040] text-3xl md:text-5xl font-bold font-bitter text-center px-4">
              Go Forward. Move Forward!!
            </h1>
            <h1 className="text-white text-3xl md:text-3xl font-bold font-bitter text-center px-4">
              Shree Testing Secondary School
            </h1>
          </div>
        </div>
      </div>

      {/* Events / News Section */}
      <div className="my-16 px-4 md:px-[150px] flex flex-col md:flex-row gap-20 justify-center">
        <div className="flex-1 flex flex-col gap-4 gap-y-6">
          <h2 className="font-semibold text-xl text-[#10507a]">
            EVENTS/ NOTICE
          </h2>
          <div className="flex gap-4">
            <img src={homeimg} className="h-24 w-32 object-cover rounded" />
            <div>
              <a href="" className="font-bold  text-[20px] text-[#10507a]">
                Lorem ipsum dolor sit amet.
              </a>
              <p className="text-gray-700 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                consectetur quasi dicta quaerat enim quod, inventore expedita
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 gap-y-6">
          <h2 className="font-semibold text-xl text-[#10507a]">NEWS</h2>
          <div className="flex gap-4">
            <img src={homeimg} className="h-24 w-32 object-cover rounded" />
            <div>
              <a href="" className="font-bold  text-[20px] text-[#10507a]">
                Lorem ipsum dolor sit amet.
              </a>
              <p className="text-gray-700 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                consectetur quasi dicta quaerat enim quod, inventore expedita
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
