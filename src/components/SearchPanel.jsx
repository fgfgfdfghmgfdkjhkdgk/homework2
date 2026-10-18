import React from 'react';

function SearchPanel({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div className="controls-card">
      <input
        type="text"
        placeholder="Найти сотрудника"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Все сотрудники
        </button>
        <button
          className={filter === 'promotion' ? 'active' : ''}
          onClick={() => setFilter('promotion')}
        >
          На повышение
        </button>
        <button
          className={filter === 'highSalary' ? 'active' : ''}
          onClick={() => setFilter('highSalary')}
        >
          ЗП больше 1000$
        </button>
      </div>
    </div>
  );
}

export default SearchPanel;