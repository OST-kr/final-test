import React, { useState } from 'react';

function WriteDiary ({ onSave }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      content: content,
      image: image,
      date: new Date().toDateString()
    });
    setContent(''); 
    setImage(null); 
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        {image && <img src={image} alt="Preview" style={{ width: '450', height: '450' }} />}
        <input type="file" onChange={handleImageChange} />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default WriteDiary;