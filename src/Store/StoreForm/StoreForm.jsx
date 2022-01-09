import "./StoreForm.css";
function StoreForm(props) {
  return (
    <form className="store--form">
      <label>
        Choose a filter:
        <select name="filter" onChange={(e) => props.setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="fruit">Fruits</option>
          <option value="vegetable">Vegetables</option>
        </select>
      </label>
      <label>
        Sort by:
        <select name="sort" onChange={(e) => props.setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="alphabetAsc">Alphabetically(asc)</option>
          <option value="alphabetDesc">Alphabetically(desc)</option>
          <option value="priceAsc">Price(asc)</option>
          <option value="priceDesc">Price(desc)</option>
        </select>
      </label>
    </form>
  );
}
export default StoreForm
