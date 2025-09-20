function Logo(prop) {
  return (
    <div
      className="logo"
      style={{ color: prop.color, fontSize: prop.fontSize }}
    >
      <h1>Panto</h1>
    </div>
  );
}
export default Logo;
