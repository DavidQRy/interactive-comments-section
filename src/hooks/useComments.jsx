import {
  removeCommentFromList,
  updateCommentInList,
  updateVoteInList,
} from '@utils/comments'
import data from '@data/data.json'
import { useState } from 'react'

export const useComments = () => {
  const [comments, setComments] = useState(data.comments)
  const [deletingId, setDeletingId] = useState(null)

  const handleVote = (id, delta) => {
    setComments((prev) => updateVoteInList(prev, id, delta))
  }

  const handleAdd = (content, user) => {
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        content,
        createdAt: 'Just now',
        score: 0,
        user,
        replies: [],
      },
    ])
  }

  const confirmDelete = () => {
    setComments((prev) => removeCommentFromList(prev, deletingId))
    setDeletingId(null)
  }

  const handleEdit = (id, newContent) => {
    setComments((prev) => updateCommentInList(prev, id, newContent))
  }

  return {
    comments,
    handleVote,
    handleAdd,
    confirmDelete,
    deletingId,
    setDeletingId,
    handleEdit,
  }
}
