import { Avatar } from './ui/avatar'
import { UserTag } from './ui/user-tag'

export const CommentHeader = ({ user, createdAt, isCurrentUser = false }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={user.image.png} username={user.username} />
      <span className="font-bold text-slate-700">{user.username}</span>
      {isCurrentUser && <UserTag />}
      <span className="text-gray-500">{createdAt}</span>
    </div>
  )
}
