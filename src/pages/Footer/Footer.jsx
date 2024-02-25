import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub__footer">
        <div className="first_footer">
          <h2>Categories</h2>
          <ul>
            <NavLink to={"/background-removal"}>
              <li>Background Removal</li>
            </NavLink>
            <NavLink to={"/image-enhancer"}>
              <li>Image Enhancer</li>
            </NavLink>
            <NavLink to={"/generate-images"}>
              <li>Generate Images</li>
            </NavLink>
            <NavLink to={"/text-translation"}>
              <li>Text Translation</li>
            </NavLink>
            <NavLink to={"/video-to-audio"}>
              <li>Video To Audio</li>
            </NavLink>
            <NavLink to={"/video-downloader"}>
              <li>Video Downloader</li>
            </NavLink>
          </ul>
        </div>
        <div className="second__footer">
          <h2>Contact</h2>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="third__footer">
          <h2>Social</h2>
          <ul>
            <NavLink
              to={"https://www.linkedin.com/in/ritik-kumar-pathak-b1a014256/"}
              target="_blank"
            >
              <li>Linked In</li>
            </NavLink>
            <NavLink to={"https://github.com/hritikpathak06"} target="_blank">
              <li>Github</li>
            </NavLink>
            <NavLink
              to={"https://www.instagram.com/___r__ocky___/"}
              target="_blank"
            >
              <li>Instagram</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
