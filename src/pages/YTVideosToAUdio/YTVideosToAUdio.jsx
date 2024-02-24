import React from "react";
import VideoTOMp3 from "../../components/VideoToMp3/VideoTOMp3";
import Layout from "../Layout/Layout";
import "./YTVideosToMp3.scss"

const YTVideosToAUdio = () => {
  return (
    <Layout>
      <div className="yt__videos">
        <h1>Youtube Video To Mp3</h1>
        <VideoTOMp3/>
      </div>
    </Layout>
  );
};

export default YTVideosToAUdio;
