export const updateVoteInList = (list, id, delta) =>
  list.map((item) => {
    if (item.id === id) {
      return { ...item, score: item.score + delta }
    }
    if (item.replies?.length > 0) {
      return { ...item, replies: updateVoteInList(item.replies, id, delta) }
    }
    return item
  })

export const removeCommentFromList = (list, targetId) =>
  list
    .filter((item) => item.id !== targetId)
    .map((item) => ({
      ...item,
      replies: item.replies
        ? removeCommentFromList(item.replies, targetId)
        : [],
    }))

export const updateCommentInList = (list, id, newContent) =>
  list.map((item) => {
    if (item.id === id) {
      return { ...item, content: newContent }
    }
    if (item.replies?.length > 0) {
      return {
        ...item,
        replies: updateCommentInList(item.replies, id, newContent),
      }
    }
    return item
  })
