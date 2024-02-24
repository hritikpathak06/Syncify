import React, { useState } from "react";
import axios from "axios";
import "../BGRemoval/BGRemoval.scss";
import Loader from "../Loader/Loader";

const IMGEnhancer = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file));

    setLoading(true);
    const data = new FormData();
    data.append("image", file);
    data.append("upscale_factor", "2");
    data.append("format", "JPG");

    const options = {
      method: "POST",
      url: "https://picsart-photo-enhancement.p.rapidapi.com/upscale/ultra",
      params: { mode: "sync" },
      headers: {
        "X-RapidAPI-Key": "c1a0362337mshb0c38b589022a68p1d4d05jsn1bd1ef91c36f",
        "X-RapidAPI-Host": "picsart-photo-enhancement.p.rapidapi.com",
        ...Object.fromEntries(data),
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      setEnhancedImage(response.data.data.url);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  // console.log(enhancedImage);
  const downloadImage = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, {
        responseType: "blob", // Important
      });
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  return (
    <div className="bgremoval">
      <div className="bgremoval__input">
        <div className="file-input-wrapper">
          <input
            className="custom-file-input"
            type="file"
            accept="image/*"
            onChange={handleUploadImage}
          />
          <label className="file-input-label" htmlFor="file">
            Choose a file
          </label>
        </div>
        {enhancedImage && (
          <button onClick={() => downloadImage(enhancedImage)}>Download</button>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bgremoval__data">
            {uploadedImage && (
              <>
                {/* <h2>Uploaded Image:</h2> */}
                <div className="bgremoval__left">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    style={{ maxWidth: "100%", maxHeight: "400px" }}
                  />
                </div>
              </>
            )}
            {enhancedImage && (
              <div className="bgremoval__right">
                {/* <h2>Removed Background Image:</h2> */}
                <img
                  src={enhancedImage}
                  alt="Removed Background"
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                />
              </div>
            )}
          </div>
        </>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default IMGEnhancer;
