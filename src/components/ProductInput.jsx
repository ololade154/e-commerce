import Search from './Search';
function ProductInput({ containerClass, placeholder, inputClass }) {
  return (
    <div className={containerClass}>
      <div className={inputClass}>
        <div>
          <input placeholder={placeholder} />
        </div>
        <div className="search-icon">
          <Search width={16} color="white" />
        </div>
      </div>
    </div>
  );
}
export default ProductInput;
