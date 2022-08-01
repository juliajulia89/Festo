import './styles.scss'
const SearchBar = () => {
  return (
    <div className="searchContainer">
      <div className="inputContainer searchContainerInput">
        🔍
        <input
          className="searchContainerInput searchContainerInput--no-styles"
          type="search"
          placeholder="Name"
        />
      </div>
     <div className="searchContainerInput">
        🗓
      <input className="searchContainerInput" type="month" name="" id="" />
      </div>
    </div>
  )
}

export default SearchBar
