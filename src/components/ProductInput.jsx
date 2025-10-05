import Search from './Search';
function ProductInput({
  containerClass,
  placeholder,
  inputClass,
  value,
  onChange,
  onSearch,
}) {
  return (
    <div className={containerClass}>
      <div className={inputClass}>
        <div>
          <input placeholder={placeholder} value={value} onChange={onChange} />
        </div>
        <div className="search-icon" onClick={onSearch}>
          <Search width={16} color="white" />
        </div>
      </div>
    </div>
  );
}
export default ProductInput;
