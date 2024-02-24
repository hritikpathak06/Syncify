import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const Home = () => {
  const navigate = useNavigate();
  const { userData } = useUser();

  return (
    <>
      <div className="home">
        <div className="home__header">
          <img src="./syncify.png" alt="" />
          {!userData && (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
        <div className="home__content">
          <h1>
            SYNCIFY Your Media Experience: Download Videos and Create Stunning
            Images with Ease
          </h1>
          <p>
            Transform Your Web Experience: Effortlessly Download Videos and
            Create Stunning Images with Our Cutting-Edge SASS Platform
          </p>
          <button onClick={() => navigate("/background-removal")}>
            Get Started
          </button>
          <img src="./sass.jpg" alt="" />
        </div>
        <div className="home__functions">
          <h1>WHAT WE OFFER</h1>
          {homeData.map((item, idx) => (
            <div className="functions">
              {idx % 2 === 0 ? (
                <>
                  <div className="left__functions">
                    <img src={item.poster} alt="" />
                    <img src={item.cutout} alt="" />
                  </div>
                  <div className="right__functions">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                    <button onClick={() => navigate(item.link)}>
                      {item.btn}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="right__functions">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                    <button onClick={() => navigate(item.link)}>
                      {item.btn}
                    </button>
                  </div>
                  <div className="left__functions">
                    <img src={item.poster} alt="" />
                    <img src={item.cutout} alt="" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

const homeData = [
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Background Remover",
    subtitle:
      "Revolutionize your visuals with our background remover feature! Effortlessly eliminate backgrounds from images, enhancing your designs. Seamlessly integrate this powerful tool into your web application for stunning results.",
    btn: "Remove Background",
    link: "/background-removal",
  },
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Image Enhancer",
    subtitle:
      "Transform ordinary images into extraordinary visuals with our image enhancer feature! Elevate the quality of your photos with advanced editing tools, enhancing colors, sharpness, and overall appeal. Experience the difference in your web application today!",
    btn: "Enhance Image",
    link: "/image-enhancer",
  },
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Generate Images",
    subtitle:
      "Unlock endless creativity with our image generation feature! Generate custom images for your web application with ease. From placeholders to dynamic graphics, fuel your imagination and enhance your visual content effortlessly.",
    btn: "Genrate Image",
    link: "/generate-images",
  },
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Text Translation",
    subtitle:
      "Break language barriers with our text translation feature! Seamlessly translate text in your web application to communicate globally. Enhance user experience and expand your reach with effortless multilingual support.",
    btn: "Translate Text",
    link: "/text-translation",
  },
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Video To Audio",
    subtitle:
      "Convert YouTube videos to audio effortlessly with our feature! Extract audio tracks from videos, enabling users to enjoy their favorite content in audio format. Enhance the versatility of your web application with this powerful tool.",
    btn: "Convert To Audio",
    link: "/video-to-audio",
  },
  {
    poster: "./removeBG.png",
    cutout: "./bgg.png",
    title: "Video Downloader",
    subtitle:
      "Download videos from popular platforms like Facebook, Instagram, TikTok, and YouTube with ease using our video downloader feature! Save your favorite videos for offline viewing and sharing. Enhance your web experience with seamless video downloading capabilities.",
    btn: "Download Video",
    link: "/video-downloader",
  },
];
