import { AddComment } from '@components/add-comment'
import { CommentCard } from '@components/comment-card'
import { ReplyList } from '@components/reply-list'
import data from '@data/data.json'
import { useComments } from '@hooks/useComments'

export const Comments = () => {
  const { currentUser } = data
  const { comments, handleVote, handleAdd } = useComments()

  return (
    <section className="max-w-3xl mx-auto py-8 px-4 bg-very-light-gray min-h-screen flex flex-col gap-4">
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard
            comment={comment}
            currentUser={currentUser}
            onUpvote={() => handleVote(comment.id, 1)}
            onDownvote={() => handleVote(comment.id, -1)}
          />
          {comment.replies.length > 0 && (
            <ReplyList
              replies={comment.replies}
              currentUser={currentUser}
              handleVote={handleVote}
            />
          )}
        </div>
      ))}
      <AddComment
        currentUser={currentUser}
        onSend={(txt) => handleAdd(txt, currentUser)}
      />
    </section>
  )
}
