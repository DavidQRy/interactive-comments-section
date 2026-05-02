export const ScoreCounter = ({ score = 0, onUpvote, onDownvote }) => {
  return (
    <div className="flex flex-row md:flex-col items-center justify-between bg-[#F5F6FB] rounded-lg p-3 w-24 h-10 md:w-10 md:h-24">
      <button
        type="button"
        onClick={onUpvote}
        className="flex items-center justify-center group cursor-pointer"
        aria-label="Upvote"
      >
        <img
          src="/images/icon-plus.svg"
          className="w-3 h-3 transition-filter group-hover:brightness-50"
          alt="plus"
        />
      </button>
      <span className="text-[#575BBE] font-bold text-lg">{score}</span>
      <button
        type="button"
        onClick={onDownvote}
        className="flex items-center justify-center group cursor-pointer"
        aria-label="Downvote"
      >
        <img
          src="/images/icon-minus.svg"
          className="w-3 h-3 object-contain transition-filter group-hover:brightness-50"
          alt="minus"
        />
      </button>
    </div>
  )
}
