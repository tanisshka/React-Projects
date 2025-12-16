export default function ({ children, onSelect }) {
  return (
    <span>
      <button
        className="text-stone-300 hover:text-stone-700 cursor-pointer"
        onClick={onSelect}
      >
        {children}
      </button>
    </span>
  );
}
