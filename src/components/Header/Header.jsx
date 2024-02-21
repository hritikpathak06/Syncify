import React from "react";
import "./Header.scss";
import { MdRemoveDone } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiUpgrade } from "react-icons/gi";

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
];

const Header = () => {
  return (
    <div className="header">
      <h1>Syncify</h1>
      {links.map((link) => (
        <NavLink to={link.url}>
          <div className="header__links">
            <div className="link">
              <span>{link.icon}</span>
              <p> {link.name}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
