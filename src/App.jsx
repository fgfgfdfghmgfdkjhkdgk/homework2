import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel'; 
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddEmployee = (name, salary) => {
    const newEmp = {
      id: Date.now(),
      name: name,
      salary: salary,
      isPromoted: false,
    };
    setEmployees([...employees, newEmp]);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleTogglePromotion = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, isPromoted: !emp.isPromoted } : emp
      )
    );
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'highSalary') return matchesSearch && emp.salary > 1000;
    if (filter === 'promotion') return matchesSearch && emp.isPromoted;
    return matchesSearch;
  });

  const totalEmployees = employees.length;
  const promotionCount = employees.filter((e) => e.isPromoted).length;

  return (
    <div className="container">
      <Header totalEmployees={totalEmployees} promotionCount={promotionCount} />
      
      <SearchPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      
      <EmployeeList
        employees={filteredEmployees}
        onTogglePromotion={handleTogglePromotion}
        onDelete={handleDelete}
      />
      <AddEmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default App;