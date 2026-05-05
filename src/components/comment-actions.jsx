import { ButtonDelete } from '@components/ui/button-delete'
import { ButtonEdit } from '@components/ui/button-edit'
import { ButtonReply } from '@components/ui/button-reply'

export const CommentActions = ({
  isCurrentUser,
  onDelete,
  onEdit,
  onReply,
}) => (
  <div className="flex gap-4">
    {isCurrentUser ? (
      <>
        <ButtonDelete onClick={onDelete} />
        <ButtonEdit onClick={onEdit} />
      </>
    ) : (
      <ButtonReply onClick={onReply} />
    )}
  </div>
)
