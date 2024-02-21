import React from "react";
import Layout from "../Layout/Layout";
import BGRemoval from "../../components/BGRemoval/BGRemoval";
import IMGEnhancer from "../../components/IMGEnhancer/IMGEnhancer";

const ImageEnhancer = () => {
  return (
    <Layout>
      <div className="background__removal">
        <h1>Image Enhancer</h1>
        <IMGEnhancer />
      </div>
    </Layout>
  );
};

export default ImageEnhancer;
