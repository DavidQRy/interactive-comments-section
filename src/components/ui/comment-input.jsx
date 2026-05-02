export const CommentInput = ({ value = '', onChange, isActive = true }) => (
  <textarea
    placeholder="Add a comment..."
    value={value}
    onChange={onChange}
    className={`
      border rounded-lg py-3 px-5 w-full resize-none outline-none min-h-25
      border-slate-300 focus:border-[#575BBE] transition-colors
      ${isActive ? 'border-[#575BBE]' : 'border-slate-300'}
    `}
  />
)
