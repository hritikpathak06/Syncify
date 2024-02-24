import React, { useState } from "react";
import Layout from "../Layout/Layout";
import SignIn from "../SignIn/SignIn";
import Loader from "../../components/Loader/Loader";

const Home = () => {


  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <SignIn />
      </div>
      <Loader/>
    </Layout>
  );
};

export default Home;
