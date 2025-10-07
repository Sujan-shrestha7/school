import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Header from "./Header";
import Head from "./Head";
import homeimg from "../assets/images/home.jpg";
import homevideo from "../assets/videos/video2.mp4";
import sidebarlogo from "../assets/images/sidebarlogo.png";
import world from "../assets/images/world.png";
import board from "../assets/images/board.webp";
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

const images = [homeimg, sidebarlogo, board];

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHead, setShowHead] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowHead(true);
      } else {
        setShowHead(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return (
    <div>
      <div className="sticky top-0 z-50 bg-[#000000] shadow-md transition-all duration-500">
        {showHead ? <Head /> : <Header />}
      </div>

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
        <div className="w-full md:w-[500px] h-screen flex flex-col gap-20 pt-[100px] md:pt-[150px] md:pr-[0px] justify-center">
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              EVENTS/ NOTICE
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptate culpa atque natus officia illum, nihil, assumenda
                autem excepturi hic dolores officiis cumque, ad quaerat!
                Molestiae vel ab blanditiis nulla officiis. Itaque qui
                dignissimos laudantium facere explicabo. Ducimus repudiandae
                magnam facere, fuga maxime quaerat, possimus blanditiis aut,
                ipsum perspiciatis dolorem!
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                illum provident vero inventore quis qui, ab itaque quisquam
                natus, dolor aliquam beatae a at ad officiis omnis placeat. Ad
                cumque hic odit eligendi doloremque maiores aspernatur fugiat
                iusto. Autem, saepe! Nostrum vitae autem ipsa ducimus.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 gap-y-6">
            <h2 className="font-semibold text-xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <div>
              <p className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                animi saepe repellendus, reiciendis accusamus harum tempore
                officiis obcaecati iure consequuntur exercitationem alias autem
                in unde ducimus! Mollitia cum delectus dolorem sunt reiciendis,
                voluptatem atque sed perspiciatis tenetur nesciunt ad. Nihil
                blanditiis sint hic dolores quod?
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
        <div className="flex gap-6 overflow-x-auto md:px-[30px] scrollbar-hide">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative min-w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer"
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
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative bg-black rounded-xl max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
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

      {/* Slider */}
      <div
        {...handlers}
        className="relative w-full h-screen overflow-hidden cursor-pointer p-[20px] md:py-[80px]"
      >
        {/* Slides Wrapper */}
        <div
          className="flex gap-[30px] h-full transition-transform duration-2000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-auto rounded-[10px] bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                currentIndex === index
                  ? "bg-blue-500 border-blue-500 scale-110"
                  : "bg-white border-gray-400 opacity-60 hover:opacity-100"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* About-Us */}
      <div
        className="relative w-full h-[750px] bg-black text-white flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${world})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated Text */}
        <div className="text-4xl text-center  md:px-[100px] flex flex-col gap-y-[20px]">
          About Us
          <div className="flex flex items-center justify-center flex-col gap-y-[50px]">
            <p className="md:text-2xl text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptate asperiores illo minima? Voluptates voluptate officia
              aperiam maxime amet fuga commodi iusto, fugiat non dolorum
              delectus totam ea blanditiis quisquam?
            </p>
            <button className="rounded-[5px] bg-[#062a7d] w-[200px] text-[18px] text-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
