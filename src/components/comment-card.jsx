import { ButtonDelete } from '@components/ui/button-delete'
import { ButtonEdit } from '@components/ui/button-edit'
import { ButtonReply } from '@components/ui/button-reply'
import { CommentHeader } from '@components/comment-header'
import { ScoreCounter } from '@components/ui/score-counter'

const CommentActions = ({ isCurrentUser, onDelete, onEdit, onReply }) => (
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

const DesktopLayout = ({ children, scoreProps, actionProps }) => (
  <>
    <div className="hidden md:block">
      <ScoreCounter {...scoreProps} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-4">
        {/* Header */}
        {children[0]}
        <div className="hidden md:block">
          <CommentActions {...actionProps} />
        </div>
      </div>
      {/* Content */}
      {children[1]}
      <div className="flex justify-between items-center mt-4 md:hidden">
        <ScoreCounter {...scoreProps} />
        <CommentActions {...actionProps} />
      </div>
    </div>
  </>
)

export const CommentCard = ({
  comment,
  currentUser,
  onUpvote,
  onDownvote,
  onReply,
  onDelete,
  onEdit,
}) => {
  const isCurrentUser = comment.user.username === currentUser.username
  const scoreProps = { score: comment.score, onUpvote, onDownvote }
  const actionProps = { isCurrentUser, onDelete, onEdit, onReply }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 mb-4">
      <DesktopLayout scoreProps={scoreProps} actionProps={actionProps}>
        <CommentHeader
          user={comment.user}
          createdAt={comment.createdAt}
          isCurrentUser={isCurrentUser}
        />
        <p className="text-gray-500 leading-relaxed">
          {comment.replyingTo && (
            <span className="text-[#575BBE] font-bold mr-2">
              @{comment.replyingTo}
            </span>
          )}
          {comment.content}
        </p>
      </DesktopLayout>
    </div>
  )
}
