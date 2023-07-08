import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import ball from "../assets/img/ball.png";
import goku from "../assets/img/goku.png";
import vegita from "../assets/img/vegita.png";
import broly from "../assets/img/broly.png";
import background from "../assets/img/background.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const [activeItem, setActiveItem] = useState("Story");
  const [story, setStory] = useState(0);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <section className="relative w-full h-screen">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-5 absolute">
          <img src={background} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-[#1c1a24] mix-blend-overlay z-[-1]"></div>
        <div className="absolute top-[10%] text-[190px] font-bold uppercase text-[#ff7516] flex flex-col gap-[-10em] z-[-1]">
          <span className=" leading-[0.8]">Saiyans</span>
          <span className=" leading-[0.8]">Never</span>
          <span className=" leading-[0.8]">Die</span>
        </div>
        <div className="flex">
          <div className="w-[80%] flex justify-evenly items-center">
            <div className="flex justify-between items-center">
              <div className="relative  w-[700px] h-[700px] bottom-0">
                <AnimatePresence initial={false} custom={story}>
                  <Swiper
                    className="mySwiper"
                    navigation={true}
                    initialSlide={story}
                    key={story}
                  >
                    <SwiperSlide>
                      <div className="w-[600px] absolute bottom-20 block -left-5">
                        <motion.img
                          src={goku}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            filter: "drop-shadow(20px 8px 20px #9DB2BF)",
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-[570px] absolute bottom-20 block ">
                        <motion.img
                          src={vegita}
                          alt=""
                          style={{
                            width: "50%",
                            height: "auto",
                            filter: "drop-shadow(10px 8px 20px #2B2A4C)",
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="w-[500px] absolute bottom-20 block -left-5">
                        <motion.img
                          src={broly}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            filter: "drop-shadow(10px 8px 20px #A2FF86)",
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </AnimatePresence>
              </div>
              <div className="">
                <div className="flex justify-center mb-5">
                  <ul className="flex gap-5 text-white">
                    <li className="bg-[#ff6a15] p-1 rounded-full ">
                      <a href="">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li className="bg-[#ff6a15] p-1 rounded-full">
                      <a href="">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li className="bg-[#ff6a15] p-1 rounded-full">
                      <a href="">
                        <InstagramIcon />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-[350px] h-[200px] overflow-hidden mb-5">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/FoNeHNicM8U"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <ul className="flex text-white font-bold gap-10 text-[20px] mb-5">
                  <li>
                    <button
                      className={`${story === 0 ? "text-[#ff6a15]" : ""}`}
                      onClick={() => setStory(0)}
                    >
                      001
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${story === 1 ? "text-[#ff6a15]" : ""}`}
                      onClick={() => setStory(1)}
                    >
                      002
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${story === 2 ? "text-[#ff6a15]" : ""}`}
                      onClick={() => setStory(2)}
                    >
                      003
                    </button>
                  </li>
                </ul>
                <div className="w-full h-[5px] bg-white rounded-full overflow-hidden mb-[60px]">
                  <div className="h-full bg-[#ff6a15] w-[40%]"></div>
                </div>
                <div className="text-white">
                  <h1 className="text-[20px] font-bold mb-5">
                    BECOME A{" "}
                    <span className="text-[#ff6a15]">SUPER SAIYAN</span>
                  </h1>
                  <h2 className="w-[350px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, vitae.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%] h-screen fixed right-0 bluring p-10 flex flex-col justify-between">
            {/* Sidebar content */}
            <div className="flex flex-col items-center gap-10">
              <div>
                <img src={logo} alt="" />
              </div>
              <ul className="text-white flex flex-col gap-5">
                <li>
                  <a
                    href="#"
                    className={activeItem === "Story" ? "active" : ""}
                    onClick={() => handleItemClick("Story")}
                  >
                    <span className="relative">
                      {activeItem === "Story" && (
                        <img
                          src={ball}
                          alt="Ball"
                          className="absolute  top-[50%] translate-y-[-50%] h-4 -left-6"
                        />
                      )}
                      Story
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#Gameplay"
                    className={activeItem === "Gameplay" ? "active" : ""}
                    onClick={() => handleItemClick("Gameplay")}
                  >
                    <span className="relative">
                      {activeItem === "Gameplay" && (
                        <img
                          src={ball}
                          alt="Ball"
                          className="absolute top-[50%] translate-y-[-50%] h-4 -left-6"
                        />
                      )}
                      Gameplay
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeItem === "Character" ? "active" : ""}
                    onClick={() => handleItemClick("Character")}
                  >
                    <span className="relative">
                      {activeItem === "Character" && (
                        <img
                          src={ball}
                          alt="Ball"
                          className="absolute  top-[50%] translate-y-[-50%] h-4 -left-6"
                        />
                      )}
                      Character
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeItem === "Reviews" ? "active" : ""}
                    onClick={() => handleItemClick("Reviews")}
                  >
                    <span className="relative">
                      {activeItem === "Reviews" && (
                        <img
                          src={ball}
                          alt="Ball"
                          className="absolute  top-[50%] translate-y-[-50%] h-4 -left-6"
                        />
                      )}
                      Reviews
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className=" text-white w-[100px] py-1 border-2 font-semibold border-[#ff6a17]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="Gameplay" className="h-screen bg-[#1c1a24]"></section>
    </>
  );
};

export default Home;
