"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Header from "./Header";
import Head from "./Head";
import homeimg from "../assets/images/home.jpg";
import homevideo from "../assets/videos/video2.mp4";
import world from "../assets/images/world.png";
import featureimg1 from "../assets/images/featureimg1.jpg";
import maxhubboards from "../assets/images/maxhubboards.jpg";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Type for video
type Video = {
  id: number;
  thumbnail: string;
  src: string;
  title: string;
  author: string;
};

// Sample videos
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

const images = [homeimg, featureimg1, maxhubboards];

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHead, setShowHead] = useState(false);

  // Show Head after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHead(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for both sliders
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#000000] shadow-md transition-all duration-1000">
        {showHead ? <Head /> : <Header />}
      </div>

      {/* Hero Video Section */}
      <div className="relative w-full h-[500px] md:h-screen">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={homevideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* EVENTS & FEATURES SECTION */}
      <div className="px-[20px] md:px-[100px] py-[40px] md:py-[80px] flex flex-col gap-y-[80px] overflow-hidden">
        {/* Events */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-semibold text-xl md:text-2xl text-center text-[#10507a]">
              EVENTS / NOTICE
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptate culpa atque natus officia illum, nihil, assumenda autem
              excepturi hic dolores officiis cumque, ad quaerat!
            </p>
          </div>
          <img
            src={maxhubboards}
            className="rounded-[10px] w-full md:w-[650px] h-auto md:h-[400px] object-cover"
            alt="Events"
          />
        </motion.div>

        {/* Features */}
        <motion.div
          className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={featureimg1}
            className="rounded-[10px] w-full md:w-[650px] h-auto md:h-[400px] object-cover"
            alt="Features"
          />
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-semibold text-xl md:text-2xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              illum provident vero inventore quis qui, ab itaque quisquam natus.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===== First Slider (Fixed Background) ===== */}
      <div className="flex flex-col gap-8">
        <div className="relative w-full h-[750px] bg-black text-white flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundAttachment: "fixed",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Maxhub Digital Board Nepal
            </h1>
            <p className="text-xl">Modern design. Smooth Workflow. Fast Learning.</p>
          </div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 flex gap-3 justify-center w-full z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-white scale-125" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Video Carousel Section ===== */}
      <div className="w-full px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Videos from our clients</h2>
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-black text-2xl">▶</span>
                </div>
              </div>
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

      {/* ===== Second Slider (scrolls normally) ===== */}
      <div {...handlers} className="flex flex-col gap-8 py-[80px] cursor-pointer">
        <div className="relative w-full h-[750px] bg-black text-white flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our Innovative Displays
            </h1>
            <p className="text-xl">Experience visuals that move with you.</p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-8 flex gap-3 justify-center w-full z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-white scale-125" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

<div
  className="relative w-full h-[750px] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${world})`,
    backgroundSize: "60%", // smaller map
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* ABOUT MAXHUB */}
  <div className="text-center md:px-[100px] flex flex-col items-center gap-y-[30px] px-6">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">ABOUT MAXHUB</h2>

    <div className="max-w-5xl flex flex-col gap-y-6 text-gray-300 text-[14px] md:text-[18px] leading-relaxed">
      <p>
        As an innovation-driven team, MAXHUB focuses on developing collaboration
        solutions that enable immersive communications. Since established in
        2017, we have enhanced team creativity and productivity worldwide by
        providing advanced audio-visual technologies and one-stop solutions.
      </p>
      <p>
        MAXHUB Ecosystem focuses on a total solution for complete scenarios.
        From smart Interactive Displays, to high-quality UC products, to
        ground-breaking all-in-one LED and eye-catching Digital Signage, to
        Mobile Stands for flexible work, we’ve got you covered.
      </p>
    </div>

    {/* Responsive Button */}
    <button className="rounded-[5px] bg-[#062a7d] hover:bg-[#0b3ecf] transition duration-300 w-[150px] sm:w-[180px] md:w-[200px] text-[14px] sm:text-[16px] md:text-[18px] text-center py-2 md:m-0 m-4">
      Learn More
    </button>
  </div>

  {/* Stats Section */}
  <div className="absolute bottom-[40px] flex flex-wrap justify-center gap-x-10 md:gap-x-16 gap-y-6 text-center text-white px-4">
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold">6500+</h3>
      <p className="text-gray-400 text-sm">Total Employees</p>
    </div>
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold">30</h3>
      <p className="text-gray-400 text-sm">Average Age</p>
    </div>
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold">60%</h3>
      <p className="text-gray-400 text-sm">R&amp;D Engineer</p>
    </div>
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold">US$ 3B</h3>
      <p className="text-gray-400 text-sm">Revenue</p>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Home;
