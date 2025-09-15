import Search from './Search';

function Input() {
  return (
    <div className="input-container">
      <div className="input">
        <div>
          <input placeholder="Search furniture"></input>
        </div>
        <div className="search-icon">
          <Search width={18} color="white" />
        </div>
      </div>
    </div>
  );
}
export default Input;
