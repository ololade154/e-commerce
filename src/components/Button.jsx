import Add from './Add';
function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        <Add width={15} />
      </button>
    </div>
  );
}
export default Button;
