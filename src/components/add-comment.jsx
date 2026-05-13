import { Avatar } from '@components/ui/avatar'
import { ButtonAction } from '@components/ui/button-action'
import { CommentInput } from '@components/ui/comment-input'
import { useState } from 'react'

export const AddComment = ({ currentUser, buttonText = 'SEND', onSend }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    onSend(text)
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col md:flex-row items-start gap-4 mb-4"
    >
      <div className="hidden md:block">
        <Avatar
          src={currentUser.image.png}
          username={currentUser.username}
          size="md"
        />
      </div>

      <div className="flex-1 w-full">
        <CommentInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          isActive={text.length > 0}
        />
      </div>
      <div className="hidden md:block">
        <ButtonAction label={buttonText} type="submit" onClick={handleSubmit} />
      </div>
      <div className="flex justify-between items-center w-full md:hidden mt-2">
        <Avatar
          src={currentUser.image.png}
          username={currentUser.username}
          size="md"
        />
        <ButtonAction label={buttonText} type="submit" onClick={handleSubmit} />
      </div>
    </form>
  )
}
