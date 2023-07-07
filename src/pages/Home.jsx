import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import ball from "../assets/img/ball.png";
import goku from "../assets/img/goku.png";
import background from "../assets/img/background.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Home = () => {
  const [activeItem, setActiveItem] = useState("Story");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-5 absolute">
          <img src={background} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-[#1c1a24] mix-blend-overlay z-[-1]"></div>
        <div className="absolute top-[20%] text-[170px] font-bold uppercase text-[#ff7516] flex flex-col gap-[-10em] z-[-1]">
          <span className=" leading-[0.8]">Saiyans</span>
          <span className=" leading-[0.8]">Never</span>
          <span className=" leading-[0.8]">Die</span>
        </div>
        <div className="flex">
          <div className="w-[80%] flex justify-evenly items-center">
            <div className="flex justify-between items-center">
              <div className="w-[600px] -ml-[60px] mt-[40px]">
                <img src={goku} alt="" />
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
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <ul className="flex text-white font-bold gap-10 text-[20px] mb-5">
                  <li>
                    <a href="">001</a>
                  </li>
                  <li>
                    <a href="">002</a>
                  </li>
                  <li>
                    <a href="">003</a>
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
                    href="#"
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
      </div>
    </>
  );
};

export default Home;
