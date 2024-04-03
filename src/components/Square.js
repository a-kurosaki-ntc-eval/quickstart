/**
 * Renders a square button component.
 * @param {Object} props - The component props.
 * @param {string} props.value - The value of the square.
 * @param {Function} props.onSquareClick - The click event handler for the square.
 * @returns {JSX.Element} The square button component.
 */
export function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
