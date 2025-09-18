import React, { useState } from "react";
import Header from "./Header";
import homeimg from "../assets/images/home.jpg";
import homevideo from "../assets/videos/video2.mp4";
import sidebarlogo from "../assets/images/sidebarlogo.png";
import Footer from "./Footer";

// Type for video
type Video = {
  id: number;
  thumbnail: string;
  src: string;
  title: string;
  author: string;
};

// Sample videos (replace with real thumbnails & videos)
const videos: Video[] = [
  {
    id: 1,
    thumbnail: homeimg,
    src: homevideo,
    title: "Lovic X200 PRO",
    author: "Stefano Rinaldo",
  },
  {
    id: 2,
    thumbnail: homeimg,
    src: homevideo,
    title: "Lovic X200 PRO",
    author: "Stefano Rinaldo",
  },
  {
    id: 3,
    thumbnail: homeimg,
    src: homevideo,
    title: "Lovic X200 PRO",
    author: "Stefano Rinaldo",
  },
];

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

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
        </div>
      </div>

      {/* Events / FEATURES Section */}
      <div className="my-16 md:pl-[200px] px-[20px] flex flex-col md:flex-row gap-[50px]">
        <div className="w-full md:w-[500px] h-screen flex flex-col gap-20 md:py-[450px] md:pr-[0px] justify-center">
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              EVENTS/ NOTICE
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at inventore adipisci voluptatum vel culpa dignissimos saepe natus, rerum possimus.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at inventore adipisci voluptatum vel culpa dignissimos saepe natus, rerum possimus.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at inventore adipisci voluptatum vel culpa dignissimos saepe natus, rerum possimus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[50px]">
          <img
            src={sidebarlogo}
            className="rounded-[10px] md:h-[400px] md:w-[650px]"
            alt=""
          />
          <img
            src={sidebarlogo}
            className="rounded-[10px] md:h-[400px] md:w-[650px]"
            alt=""
          />
        </div>
      </div>

      {/* 🎥 Video Carousel Section */}
      <div className="w-full px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Videos from our clients</h2>

        {/* Horizontal scrollable cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative min-w-[300px] h-56 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-black text-2xl">▶</span>
                </div>
              </div>

              {/* Video info */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-xs">🎥</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{video.title}</p>
                  <p className="text-xs">by {video.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)} // close when clicking outside
          >
            <div
              className="relative bg-black rounded-xl max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null); // ✅ close when clicking X
                }}
              >
                ✖
              </button>
              <video
                key={selectedVideo.id}
                controls
                autoPlay
                className="w-full rounded-xl"
                src={selectedVideo.src}
              />
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
