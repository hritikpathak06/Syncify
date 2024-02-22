import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ContentAwaringCopying = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [resultUrl, setResultUrl] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_cloudinary_upload_preset');

    const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setImageUrl(data.secure_url);
  };

  const removeBackground = async () => {
    const response = await fetch(`https://api.remove.bg/v1.0/removebg`, {
      method: 'POST',
      headers: {
        'X-Api-Key': 'your_removebg_api_key',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_url: imageUrl,
      }),
    });

    const data = await response.json();
    setResultUrl(data.data.result_url);
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
      {imageUrl && (
        <div>
          <h3>Original Image</h3>
          <Image cloudName="your_cloud_name" publicId={imageUrl}>
            <Transformation width="300" crop="scale" />
          </Image>
          <button onClick={removeBackground}>Remove Background</button>
        </div>
      )}
      {resultUrl && (
        <div>
          <h3>Background Removed</h3>
          <Image cloudName="your_cloud_name" publicId={resultUrl}>
            <Transformation width="300" crop="scale" />
          </Image>
        </div>
      )}
    </div>
  );
};

export default ContentAwaringCopying;
