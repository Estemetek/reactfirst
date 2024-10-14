import { useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable.jsx';
import ProductTable from './components/ProductTable.jsx';
import SearchBar from './components/SearchBar.jsx';

const students = [
  { id: 1, lastName: 'Fernandez', firstName: 'Patrik', course: 'IT', birthdate: '2000-05-15' },
  { id: 2, lastName: 'Bustamante', firstName: 'Jana', course: 'IS', birthdate: '1998-09-23' },
  { id: 3, lastName: 'Gomez', firstName: 'Alice', course: 'CS', birthdate: '2002-02-18' },
  { id: 4, lastName: 'Gerald', firstName: 'Bernard', course: 'DS', birthdate: '1999-10-12' },
];

// Helper function to accurately calculate age
const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};


function App() {
  const [query, setQuery] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  const filteredStudents = students.filter((student) => {
    const age = calculateAge(student.birthdate);
  
    // Check if query matches Last Name, First Name, Course, or Age
    const matchesQuery =
      student.lastName.toLowerCase().includes(query.toLowerCase()) ||
      student.firstName.toLowerCase().includes(query.toLowerCase()) ||
      student.course.toLowerCase() === query.toLowerCase() ||
      (!isNaN(query) && parseInt(query) === age); // Match age correctly
  
    // Check if the student falls within the birthdate range
    const matchesDateRange =
      (!minDate || new Date(student.birthdate) >= new Date(minDate)) &&
      (!maxDate || new Date(student.birthdate) <= new Date(maxDate));
  
    return matchesQuery && matchesDateRange;
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
        <ProductTable 
          headers={["Last Name", "First Name", "Course", "Birthdate", "Age"]} 
          students={filteredStudents} 
        />
      </FilterProductTable>
    </div>
  );
}

export default App;
