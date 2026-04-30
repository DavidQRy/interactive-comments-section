import { ButtonAction } from '@components/ui/button-action'

export const Comments = () => {
  return (
    <div>
      <ButtonAction
        label="SEND"
        onClick={() => {
          console.log('clicked')
        }}
      />
    </div>
  )
}
