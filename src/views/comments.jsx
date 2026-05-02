import { ButtonAction } from '@components/ui/button-action'
import { ButtonDelete } from '@components/ui/button-delete'
import { ButtonEdit } from '@components/ui/button-edit'
import { ButtonReply } from '@components/ui/button-reply'

export const Comments = () => {
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
    </div>
  )
}
