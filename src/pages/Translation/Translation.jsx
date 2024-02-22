import React from "react";
import "./Translation.scss"
import Layout from "../Layout/Layout";
import TranslationComponent from "../../components/TranslateText/TranslateText";

const Translation = () => {
  return (
    <Layout>
      <div className="translation">
        <h1>Translate Your Text</h1>
        <div className="translation__component">
        <TranslationComponent/>
        </div>
      </div>
    </Layout>
  );
};

export default Translation;
