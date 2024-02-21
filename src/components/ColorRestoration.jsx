import React, { useState } from "react";
import axios from "axios";

const ImageEnhancers = () => {
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
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
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

  console.log(enhancedImage);
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUploadImage} />
      {loading && <p>Enhancing image...</p>}
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
      {enhancedImage && (
        <div>
          <h2>Enhanced Image:</h2>
          <img
            src={enhancedImage}
            alt="Enhanced"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ImageEnhancers;
