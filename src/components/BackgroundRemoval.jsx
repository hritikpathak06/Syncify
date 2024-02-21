import React, { useState } from "react";
import axios from "axios";

const BackgroundRemoval = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [removedBackgroundImage, setRemovedBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);
    const data = new FormData();
    data.append("image", file);
    data.append("bg_blur", "0");
    data.append("format", "PNG");
    const options = {
      method: "POST",
      url: "https://picsart-remove-background2.p.rapidapi.com/removebg",
      headers: {
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
        "X-RapidAPI-Host": "picsart-remove-background2.p.rapidapi.com",
        ...Object.fromEntries(data),
      },
      data: data,
    };
    try {
      const response = await axios.request(options);
      setRemovedBackgroundImage(response.data.data.url);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

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
    <div>
      <input type="file" accept="image/*" onChange={handleUploadImage} />
      {loading && <p>Removing background...</p>}
      {uploadedImage && (
        <div>
          <h2>Uploaded Image:</h2>
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </div>
      )}
      {removedBackgroundImage && (
        <div>
          <h2>Removed Background Image:</h2>
          <img
            src={removedBackgroundImage}
            alt="Removed Background"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
          <button onClick={() => downloadImage(removedBackgroundImage)}>
            Download
          </button>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default BackgroundRemoval;
