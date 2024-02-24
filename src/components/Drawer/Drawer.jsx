import React, { useState, memo } from "react";
import "./Drawer.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel, GiUpgrade } from "react-icons/gi";
import { MdAudioFile, MdRemoveDone } from "react-icons/md";
import { FaFileWord, FaImage } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const links = [
  {
    name: "Background Removal",
    url: "/background-removal",
    icon: <MdRemoveDone />,
  },
  {
    name: `Image Enhancer`,
    url: "/image-enhancer",
    icon: <GiUpgrade />,
  },
  {
    name: "Generate-Images",
    url: "/generate-images",
    icon: <FaImage />,
  },
  {
    name: "Text Translation",
    url: "/text-translation",
    icon: <FaFileWord />,
  },
  {
    name: "Video To Audio",
    url: "/video-to-audio",
    icon: <MdAudioFile />,
  },
  {
    name: "Video Downloader",
    url: "/video-downloader",
    icon: <BsCameraVideoFill />,
  },
];

const Drawer = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, setUserData } = useUser();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={toggleDrawer}>
        <RxHamburgerMenu style={{ width: "30px", height: "30px" }} />
      </button>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer__data">
          <img src="./syncify.png" alt="" onClick={() => navigate("/")} />
          <button onClick={toggleDrawer} className="close-button">
            <GiCancel style={{ width: "30px", height: "30px" }} />
          </button>
        </div>
        <div className="drawer-content">
          <ul className="navigation">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.url} onClick={toggleDrawer}>
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="profile__link">
            <div className="profile">
              {userData && (
                <>
                  <img src={userData.photoURL} alt="Profile" />
                  <button onClick={Logout}>Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Drawer;
