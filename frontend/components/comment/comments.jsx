import React from 'react';

const Comments = ({ postComments, postId }) => (
  <div className="comments-container">
    <ul>
      {
        postComments.map( comment => {
          if (comment.postId === postId) {
            return  (
              <li key={comment.id}>
                <span className="username">{comment.username}</span>
                <span className="comment">{comment.body}</span>
              </li>
            );
          }
        })
      }
    </ul>
  </div>
);

export default Comments;
