import React from 'react';

function DiaryItem ({ diary, onDelete }) {
  return(
    <div className="diary-item">
      <img src={diary.image} alt="Diary" style={{ width: '450mm', height: '450' }} />
      <div>{diary.date}</div>
      <div>{diary.content}</div>
      <button onClick={() => onDelete(diary.id)}>삭제</button>
    </div>
  );
};

export default DiaryItem;