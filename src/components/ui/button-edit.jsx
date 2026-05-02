export const ButtonEdit = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-2 text-[#575BBE] font-medium hover:opacity-50 transition-opacity cursor-pointer"
  >
    <img
      src="/images/icon-edit.svg"
      className="w-3 h-3 object-contain"
      alt="icon delete"
    />
    <span>Edit</span>
  </button>
)
