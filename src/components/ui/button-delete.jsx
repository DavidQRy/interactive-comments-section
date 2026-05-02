export const ButtonDelete = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-2 text-red-500 font-medium hover:opacity-50 transition-opacity cursor-pointer"
  >
    <img
      src="/images/icon-delete.svg"
      className="w-3 h-3 object-contain"
      alt="icon delete"
    />
    <span>Delete</span>
  </button>
)
