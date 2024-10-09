const SearchBar = ({query, setQuery, stockChecked, setStockChecked}) => {
    return (
      <div>
        <input type="text" name="search" id="search" value={query} onChange={(event) => setQuery(event.target.value) } />
        <div>
        <input type="checkbox" name="checkbox" id="checkbox" checked={stockChecked} onChange={(event) => setStockChecked(event.target.checked)}/>
        Only show products in stock
        </div>
      </div>
    )
  }
  
  export default SearchBar;