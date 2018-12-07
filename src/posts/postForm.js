import React, { Component } from "react";
import { addPost } from "../services/posts";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: ""
    };
  }

  handleFieldCHange = event => {
    this.setState({
      post: event.target.value
    });
  };

  updatePage() {
    this.props.updatePage("posts");
  }

  post = () => {
    try {
      addPost(this.state.post);
      this.props.updatePage("posts");
    } catch (error) {
      console.log(error);
    }
  };

  handleValidate = () => {
    this.post();
  };

  render() {
    return (
      <div>
       
        <div class="input-group input-group-lg float-left post-message-container">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Nouveau post
            </span>
          </div>
          <input
            type="text"
            defaultValue={this.state.post}
            onChange={this.handleFieldCHange}
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleValidate}>Valider</button>
      </div>
    );
  }
}
