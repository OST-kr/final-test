import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiaryList from './DiaryList';
import WriteDiary from './WriteDiary';
import Navigation from './Navigation';

function App(){
  const [diaries, setDiaries] = useState([]);

  function saveDiary(diary){
    setDiaries([...diaries, { ...diary, id: Date.now() }]);
  };
  function deleteDiary(id){
    setDiaries(diaries.filter(diary => diary.id !== id));
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<DiaryList diaries={diaries} onDelete={deleteDiary} />} />
          <Route path="/write" element={<WriteDiary onSave={saveDiary} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;