import data from '@data/data.json'
import { useState } from 'react'

const updateVoteInList = (list, id, delta) =>
  list.map((item) => {
    if (item.id === id) {
      return { ...item, score: item.score + delta }
    }
    if (item.replies?.length > 0) {
      return { ...item, replies: updateVoteInList(item.replies, id, delta) }
    }
    return item
  })

const removeCommentFromList = (list, targetId) =>
  list
    .filter((item) => item.id !== targetId)
    .map((item) => ({
      ...item,
      replies: item.replies
        ? removeCommentFromList(item.replies, targetId)
        : [],
    }))

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

  return {
    comments,
    handleVote,
    handleAdd,
    confirmDelete,
    deletingId,
    setDeletingId,
  }
}
