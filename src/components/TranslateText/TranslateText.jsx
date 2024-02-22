import React, { useState } from "react";
import axios from "axios";
import "./TranslationText.scss";
import Loader from "../Loader/Loader";

const TranslationComponent = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const translateText = async () => {
    setLoading(true);
    setError(null);
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", text);
    encodedParams.set("from", "auto");
    encodedParams.set("to", selectedLanguage);
    const options = {
      method: "POST",
      url: "https://translate281.p.rapidapi.com/",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799",
        "X-RapidAPI-Host": "translate281.p.rapidapi.com",
      },
      data: encodedParams,
    };
    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.response);
      setText('');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="translation__text">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate..."
        ></textarea>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="zh">Chinese</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="hy">Armenian</option>
          <option value="az">Azerbaijani</option>
          <option value="eu">Basque</option>
          <option value="bn">Bengali</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
        </select>
        <button onClick={translateText} disabled={!text || loading}>
          Translate
        </button>
      </div>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          {translatedText && (
            <div className="translated__text">
              <h2>Translated Text:</h2>
              <p>{translatedText}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TranslationComponent;
