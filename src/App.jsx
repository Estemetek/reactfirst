/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable.jsx';
import ProductTable from './components/ProductTable.jsx';
import SearchBar from './components/SearchBar.jsx';

// Sample Student Data
const students = [
  { id: 1, lastName: 'Doe', firstName: 'John', course: 'IT', birthdate: '1999/06/15' },
  { id: 2, lastName: 'Smith', firstName: 'Anna', course: 'IS', birthdate: '2000/09/25' },
  { id: 3, lastName: 'Brown', firstName: 'Michael', course: 'CS', birthdate: '1998/12/03' },
  { id: 4, lastName: 'Davis', firstName: 'Emily', course: 'DS', birthdate: '2001/05/20' },
];

// Header names for the table
const headers = [
  "Last Name", "First Name", "Course", "Birthdate", "Age"
];

function App() {
  const [query, setQuery] = useState("");
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  // Filter the students based on search query and date range
  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    const birthDate = new Date(student.birthdate);
    const withinDateRange = (!minDate || birthDate >= new Date(minDate)) && (!maxDate || birthDate <= new Date(maxDate));

    return (
      fullName.includes(query.toLowerCase()) &&
      withinDateRange
    );
  });

  return (
    <div>
      <FilterProductTable>
        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          minDate={minDate}
          setMinDate={setMinDate}
          maxDate={maxDate}
          setMaxDate={setMaxDate}
        />
        <ProductTable headers={headers} students={filteredStudents} />
      </FilterProductTable>
    </div>
  );
}

export default App;
