import React, { useState } from 'react';
import axios from 'axios';

const FaceAnalyzer = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const analyzeFace = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const options = {
      method: 'POST',
      url: 'https://faceanalyzer-ai.p.rapidapi.com/faceanalysis',
      headers: {
        'content-type': 'multipart/form-data',
        'X-RapidAPI-Key': 'a7c5793e16mshbe6517a1c475f74p17fb64jsn4e8a08f42799',
        'X-RapidAPI-Host': 'faceanalyzer-ai.p.rapidapi.com'
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);
      setAnalysisResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      analyzeFace(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {analysisResult && (
        <div>
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FaceAnalyzer;
