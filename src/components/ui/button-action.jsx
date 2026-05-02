export const ButtonAction = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-[#575BBE] text-amber-50 px-7 py-3 font-semibold cursor-pointer  hover:opacity-50 transition-opacity"
    >
      {label}
    </button>
  )
}
