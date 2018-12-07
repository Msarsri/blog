import React, { Component } from "react";
import Comments from "./comments";
import { getPosts, deletePostThenComments } from "../services/posts";

export default class Posts extends Component {
  constructor() {
    super();
    this.getAllPosts();
  }

  getAllPosts = () => {
    getPosts()
      .then(success => {
        this.setState({ posts: success.data });
      })
      .catch(error => console.log(error));
  };

  handleDeletePost = post => {
    let id = Number(post.target.dataset.id);
    deletePostThenComments(id);
  };
  render() {
    let posts = this.state && this.state.posts ? this.state.posts : [];
    return (
      <div>
        {posts.map(post => (
          <div
            key={`post-container-${post.content}`}
            className="post-container"
          >
            <div key={`post-item-${post.content}`} className="post-item">
              <div
                key={`post-content-${post.content}`}
                className="post-content card card-body"
              >
                {post.content}
              </div>
              <div
                key={`button-container-${post.content}`}
                className="button-container"
              >
                <div>
                  <button type="button" className="button-add btn btn-primary">
                    Ajouter commenaitre
                  </button>
                </div>
                <div>
                  <button
                    className="button-supp btn btn-primary"
                    data-id={post.id}
                    onClick={this.handleDeletePost}
                  >
                    Supprimer post
                  </button>
                </div>
              </div>
            </div>
            <Comments comments={post.comments} />

            
          </div>
        ))}



      </div>
    );
  }
}
