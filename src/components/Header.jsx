import React from 'react';

function Header({ totalEmployees, promotionCount }) {
  return (
    <div className="header-card">
      <h1>Учет сотрудников компании №</h1>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {promotionCount}</h2>
    </div>
  );
}

export default Header;