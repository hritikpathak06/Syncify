import React from "react";
import Layout from "../Layout/Layout";
import BGRemoval from "../../components/BGRemoval/BGRemoval";
import "./BackgroundRemoval.scss"


const BackgroundRemoval = () => {
  return (
    <Layout>
      <div className="background__removal">
        <h1>Background Removal</h1>
        <BGRemoval/>
      </div>
    </Layout>
  );
};

export default BackgroundRemoval;
