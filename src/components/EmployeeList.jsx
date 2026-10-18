import React from 'react';
import EmployeeItem from './EmployeeItem';

function EmployeeList({ employees, onTogglePromotion, onDelete }) {
  return (
    <div className="employee-list">
      {employees.length > 0 ? (
        employees.map((emp) => (
          <EmployeeItem
            key={emp.id}
            employee={emp}
            onTogglePromotion={onTogglePromotion}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="empty-message">Список пуст или ничего не найдено</div>
      )}
    </div>
  );
}

export default EmployeeList;