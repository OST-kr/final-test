import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
  return(
    <nav>
      <Link to="/">홈</Link>
      <Link to="/write">쓰기</Link>
    </nav>
  );
};

export default Navigation;