const SearchBar = ({ query, setQuery, minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder="Filter by Last Name, First Name, Course, or Age"
        value={query} 
        onChange={(event) => setQuery(event.target.value)} 
      />
      
      <div>
        <label>Filter Birthdate between: </label>
        <input 
          type="date" 
          value={minDate} 
          onChange={(event) => setMinDate(event.target.value)} 
        />
        <span> and </span>
        <input 
          type="date" 
          value={maxDate} 
          onChange={(event) => setMaxDate(event.target.value)} 
        />
      </div>
    </div>
  );
};

export default SearchBar;
