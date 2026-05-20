export const DeleteModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="bg-white p-9 rounded-lg max-w-100 w-full shadow-lg">
      <h2 className="text-xl font-bold text-slate-700 mb-4">Delete comment</h2>
      <p className="text-gray-500 mb-6">
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold uppercase hover:opacity-70 transition-opacity"
        >
          No, cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 bg-red-400 text-white py-3 rounded-lg font-semibold uppercase hover:opacity-70 transition-opacity"
        >
          Yes, delete
        </button>
      </div>
    </div>
  </div>
)
