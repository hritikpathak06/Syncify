import React, { useState } from "react";
import Layout from "../Layout/Layout";
import SignIn from "../SignIn/SignIn";
import VideoTOMp3 from "../../components/VideoToMp3/VideoTOMp3";

const Home = () => {


  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <SignIn />
      </div>
    </Layout>
  );
};

export default Home;
