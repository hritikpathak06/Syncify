import React, { useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./AllVideoDownloader.scss";

const VideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadedVideoUrl, setDownloadedVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  //   const downloadVideo = async (url) => {
  //     const options = {
  //       method: "GET",
  //       url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
  //       params: {
  //         url: url,
  //         filename: "Downloaded video",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
  //         "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       setLoading(true);
  //       const response = await axios.request(options);
  //       const downloadLinks = response.data.links;
  //       setLoading(false);
  //       const hdQualityLink = downloadLinks.find(
  //         (link) => link.quality === "hd_720p"
  //       );
  //       if (hdQualityLink) {
  //         setDownloadedVideoUrl(hdQualityLink.link);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const downloadVideo = async (url) => {
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
      params: {
        url: url,
        filename: "Downloaded video",
      },
      headers: {
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      const downloadLinks = response.data.links;
      setLoading(false);
      const firstLink = downloadLinks[0]; // Selecting the first link
      if (firstLink) {
        setDownloadedVideoUrl(firstLink.link);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleDownload = () => {
    downloadVideo(videoUrl);
  };

  return (
    <div className="main__div">
      <div className="input__div">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button onClick={handleDownload}>Preview</button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {downloadedVideoUrl && (
            <>
              <div className="video__container">
                <a href={downloadedVideoUrl} download="downloaded_video.mp4">
                  <button>Download</button>
                </a>
                <video controls>
                  <source src={downloadedVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VideoDownloader;
