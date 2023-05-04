// Write your code here\
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onToggleLike, deleteComment} = props
  const {name, comment, isLike, id} = commentDetails
  const isLikeUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    onToggleLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <div className="list-container">
      <li className="comment-details-container">
        <h1 className="name-heading">{name[0]}</h1>
        <p>{name}</p>
        <p>{formatDistanceToNow(new Date())} ago</p>
      </li>
      <p>{comment}</p>
      <div className="images">
        <div className="like">
          <img className="images" src={isLikeUrl} alt="like" />

          <button type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button data-testid="delete" onClick={onDeleteComment} type="button">
          <img
            className="images"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}
export default CommentItem
