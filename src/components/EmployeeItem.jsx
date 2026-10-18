import React from 'react';

function EmployeeItem({ employee, onTogglePromotion, onDelete }) {
  return (
    <div className="employee-item">
      <span className="emp-name">{employee.name}</span>
      <span className="emp-salary">{employee.salary}$</span>
      <div className="emp-actions">
        <button
          className={`icon-btn coin-btn ${employee.isPromoted ? 'active-coin' : ''}`}
          onClick={() => onTogglePromotion(employee.id)}
        >
          🪙
        </button>
        <button
          className="icon-btn delete-btn"
          onClick={() => onDelete(employee.id)}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default EmployeeItem;