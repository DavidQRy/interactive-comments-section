import { ButtonAction } from '@components/ui/button-action'
import { ButtonDelete } from '@components/ui/button-delete'
import { ButtonEdit } from '@components/ui/button-edit'
import { ButtonReply } from '@components/ui/button-reply'
import { CommentInput } from '@components/ui/comment-input'
import { ScoreCounter } from '@components/ui/score-counter'
import { UserTag } from '@components/ui/user-tag'
import { useState } from 'react'

export const Comments = () => {
  const [score, setScore] = useState(0)

  const handleUpvote = () => {
    setScore((prev) => prev + 1)
  }

  const handleDownvote = () => {
    setScore((prev) => prev - 1)
  }
  return (
    <div>
      <ButtonAction
        label="SEND"
        onClick={() => {
          console.log('clicked')
        }}
      />
      <ButtonDelete
        onClick={() => {
          console.log('delete...')
        }}
      />
      <ButtonEdit
        onClick={() => {
          console.log('edit...')
        }}
      />
      <ButtonReply
        onClick={() => {
          console.log('reply...')
        }}
      />
      <CommentInput></CommentInput>
      <UserTag />

      <ScoreCounter
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
        score={score}
      />
    </div>
  )
}
