import { CommentCard } from '@components/comment-card'
import { ReplyList } from '@components/reply-list'
import data from '@data/data.json'
import { useState } from 'react'

export const Comments = () => {
  const [comments, setComments] = useState(data.comments)
  const { currentUser } = data

  const handleVote = (id, delta) => {
    const updateVote = (list) =>
      list.map((item) => {
        if (item.id === id) {
          return { ...item, score: item.score + delta }
        }
        if (item.replies?.length > 0) {
          return { ...item, replies: updateVote(item.replies) }
        }
        return item
      })
    setComments(updateVote(comments))
  }

  return (
    <section className="max-w-3xl mx-auto py-8 px-4 bg-very-light-gray min-h-screen">
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col">
          <CommentCard
            comment={comment}
            currentUser={currentUser}
            onUpvote={() => handleVote(comment.id, 1)}
            onDownvote={() => handleVote(comment.id, -1)}
            onReply={() => console.log('Reply to', comment.id)}
            onDelete={() => console.log('Delete', comment.id)}
            onEdit={() => console.log('Edit', comment.id)}
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
    </section>
  )
}
