export const ButtonAction = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  )
}
