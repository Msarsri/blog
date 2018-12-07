import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    let comments = this.props.comments ? this.props.comments : [];
    return (
      <div className="comment-container">


        <ul class="list-group">
        {comments.map(comment => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {comment.content}
            <span class="badge badge-primary badge-pill">{comment.id}</span>
          </li>
         ))}
        
        </ul>
      </div>
    );
  }
}
