import { CommentCard } from '@components/comment-card'

export const ReplyList = ({ replies, currentUser, handleVote }) => (
  <div className="flex flex-col border-l-2 border-slate-200 ml-4 md:ml-10 pl-4 md:pl-10">
    {replies.map((reply) => (
      <CommentCard
        key={reply.id}
        comment={reply}
        currentUser={currentUser}
        onUpvote={() => handleVote(reply.id, 1)}
        onDownvote={() => handleVote(reply.id, -1)}
        onReply={() => console.log('Reply to', reply.id)}
        onDelete={() => console.log('Delete', reply.id)}
        onEdit={() => console.log('Edit', reply.id)}
      />
    ))}
  </div>
)
