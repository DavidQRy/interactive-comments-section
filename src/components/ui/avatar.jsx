export const Avatar = ({ src, username, size = 'sm' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
  }

  return (
    <img
      src={src}
      alt={`Avatar of ${username}`}
      className={`${sizes[size]} rounded-full object-cover flex-none`}
    />
  )
}
