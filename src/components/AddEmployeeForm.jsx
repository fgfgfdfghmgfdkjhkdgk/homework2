import React, { useState } from 'react';

function AddEmployeeForm({ onAddEmployee }) {
  const [newName, setNewName] = useState('');
  const [newSalary, setNewSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newSalary) return;
    onAddEmployee(newName, parseInt(newSalary));
    setNewName('');
    setNewSalary('');
  };

  return (
    <div className="add-card">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Как его зовут?"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ЗП в $"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          required
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;