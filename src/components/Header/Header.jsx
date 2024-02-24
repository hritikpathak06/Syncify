import React, { useState } from "react";
import "./Header.scss";
import { MdRemoveDone } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { GiUpgrade } from "react-icons/gi";
import { FaFileWord } from "react-icons/fa";
import { useUser } from "../../context/userContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { MdAudioFile } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";

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

const Header = () => {
  const { userData, setUserData } = useUser();
  const [tab, setTab] = useState(window.location.pathname);
  const navigate = useNavigate();

  console.log(tab);

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
    <div className="header">
      <NavLink to={"/"}>
        <img src="./syncify.png" alt="" className="logo__img" />
      </NavLink>
      {links.map((link) => (
        <NavLink to={link.url}>
          <div
            className="header__links"
            style={{
              backgroundColor: tab === link.url ? "blueviolet" : "",
              color: tab === link.url ? "white" : "",
            }}
          >
            <div className="link">
              <span>{link.icon}</span>
              <p> {link.name}</p>
            </div>
          </div>
        </NavLink>
      ))}
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
  );
};

export default Header;
