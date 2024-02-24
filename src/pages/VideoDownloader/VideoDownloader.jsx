import React from "react";
import Layout from "../Layout/Layout";
import AllVideoDownloader from "../../components/VideoDownloader/AllVideoDownloader";
import "./VideoDownloader.scss";

const VideoDownloader = () => {
  return (
    <Layout>
      <div className="video__downloader">
        <h1>Video Downloader</h1>
        <h3>All-in-One Social Media Video Downloader</h3>
        <AllVideoDownloader />
      </div>
    </Layout>
  );
};

export default VideoDownloader;
