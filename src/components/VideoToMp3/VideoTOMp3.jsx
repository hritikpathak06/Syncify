import React, { useState } from "react";
import axios from "axios";

const VideoTOMp3 = () => {
  const [mp3Url, setMp3Url] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const convertToMp3 = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/",
      params: {
        url: inputUrl,
      },
      headers: {
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
        "X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setMp3Url(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = () => {
    const audio = new Audio(mp3Url);
    audio.play();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = mp3Url;
    link.setAttribute("download", "audio.mp3");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <input
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={convertToMp3}>Convert to MP3</button>
      {mp3Url && (
        <>
          <audio controls>
            <source src={mp3Url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleDownload}>Download</button>
        </>
      )}
    </div>
  );
};

export default VideoTOMp3;
