import { ButtonAction } from '@components/ui/button-action'
import { CommentActions } from '@components/comment-actions'
import { CommentHeader } from '@components/comment-header'
import { ScoreCounter } from '@components/ui/score-counter'
import { useState } from 'react'

const DesktopLayout = ({ children, scoreProps, actionProps }) => (
  <>
    <div className="hidden md:block">
      <ScoreCounter {...scoreProps} />
    </div>
    <div className="flex-1 w-full">
      <div className="flex justify-between items-center mb-4">
        {children[0]}
        <div className="hidden md:block">
          <CommentActions {...actionProps} />
        </div>
      </div>
      {children[1]}
      <div className="flex justify-between items-center mt-4 md:hidden">
        <ScoreCounter {...scoreProps} />
        <CommentActions {...actionProps} />
      </div>
    </div>
  </>
)

const CommentContent = ({ isEditing, text, setText, onUpdate, replyingTo }) => {
  if (isEditing) {
    return (
      <div className="flex flex-col items-end gap-4 w-full">
        <textarea
          className="w-full border border-slate-200 rounded-lg p-3 resize-none text-gray-500 focus:outline-none focus:border-[#575BBE]"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonAction label="UPDATE" onClick={onUpdate} />
      </div>
    )
  }

  return (
    <p className="text-gray-500 leading-relaxed break-words">
      {replyingTo && (
        <span className="text-[#575BBE] font-bold mr-2">@{replyingTo}</span>
      )}
      {text}
    </p>
  )
}

export const CommentCard = ({
  comment,
  currentUser,
  onUpvote,
  onDownvote,
  onReply,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(comment.content)

  const isCurrentUser = comment.user.username === currentUser.username

  const handleUpdate = () => {
    if (!editText.trim()) {
      return
    }
    onEdit(comment.id, editText)
    setIsEditing(false)
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 mb-4">
      <DesktopLayout
        scoreProps={{ score: comment.score, onUpvote, onDownvote }}
        actionProps={{
          isCurrentUser,
          onDelete,
          onEdit: () => setIsEditing(true),
          onReply,
        }}
      >
        <CommentHeader
          user={comment.user}
          createdAt={comment.createdAt}
          isCurrentUser={isCurrentUser}
        />
        <CommentContent
          isEditing={isEditing}
          text={editText}
          setText={setEditText}
          onUpdate={handleUpdate}
          replyingTo={comment.replyingTo}
        />
      </DesktopLayout>
    </div>
  )
}
