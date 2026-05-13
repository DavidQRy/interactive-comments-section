import data from '@data/data.json'
import { useState } from 'react'

export const useComments = () => {
  const [comments, setComments] = useState(data.comments)

  const handleVote = (id, delta) => {
    const update = (list) =>
      list.map((item) => {
        if (item.id === id) {
          return { ...item, score: item.score + delta }
        }
        if (item.replies?.length > 0) {
          return { ...item, replies: update(item.replies) }
        }
        return item
      })
    setComments(update(comments))
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

  return { comments, handleVote, handleAdd }
}
