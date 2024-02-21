import React, { useState } from "react";
import axios from "axios";
import "./AIImages.scss";
import Loader from "../Loader/Loader";

const AIImage = () => {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    const options = {
      method: "POST",
      url: "https://ai-image-generator3.p.rapidapi.com/generate",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
        "X-RapidAPI-Host": "ai-image-generator3.p.rapidapi.com",
      },
      data: {
        prompt: text,
        page: 1,
      },
    };
    try {
      const response = await axios.request(options);
      const imageUrls = response.data.results.images || [];
      setGeneratedImages(imageUrls);
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
    <div className="Ai_image">
      {error && <p>Error: {error}</p>}
      <div className="ai__input">
        <input
          type="text"
          placeholder="Enter The Type Of Image You want to search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={generateImage} disabled={loading}>
          Generate Image
        </button>
      </div>
      <h2>Generated Image:</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="ai__image__box">
            {generatedImages.map((url, idx) => (
              <div key={idx} className="ai__images">
                <img
                  src={url}
                  alt="Generated"
                  style={{
                    maxWidth: "100%",
                    width: "200px",
                    maxHeight: "400px",
                    height: "300px",
                  }}
                />
                <button onClick={() => downloadImage(url)}>Download</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AIImage;
