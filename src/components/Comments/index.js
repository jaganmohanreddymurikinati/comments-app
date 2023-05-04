import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

// console.log(formatDistanceToNow(new Date()))
const intitialCommentsList = []

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// Write your code here

class Comments extends Component {
  state = {
    commentsCount: 0,
    name: '',
    comment: '',
    commentsList: intitialCommentsList,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitformcontainer = event => {
    event.preventDefault()
    const {name, comment, commentsCount} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      commentsCount,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentsCount: prevState.commentsCount + 1,
    }))
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredComments,
    })
    this.setState(prevState => ({commentsCount: prevState.commentsCount - 1}))
  }

  render() {
    const {name, comment, commentsList, commentsCount} = this.state
    return (
      <div className="bg-container">
        <div className="comments-container">
          <h1 className="heading">Comments</h1>
          <p className="description">Say something about 4.0 technologies.</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
          />
          <form
            className="form-container"
            onSubmit={this.onSubmitformcontainer}
          >
            <input
              onChange={this.onChangeName}
              type="text"
              className="name-container"
              placeholder="Your Name"
              value={name}
            />
            <textarea
              onChange={this.onChangeComment}
              value={comment}
              placeholder="Your comment"
              rows="8"
              cols="50"
              className="textarea-container"
            />
            <button type="submit" className="comment-button">
              Add Comment
            </button>
          </form>
          <hr />
          <p>{commentsCount} comments</p>
          <ul className="list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                deleteComment={this.deleteComment}
                key={eachComment.id}
                onToggleLike={this.onToggleLike}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
