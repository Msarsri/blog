import React, { Component, Fragment, Suspense } from "react";
import "./styles/main.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPage: "posts"
    };
  }

  updatePage = page => {
    this.setState({ selectedPage: page });
  };

  getComponentToRender() {
    const { selectedPage } = this.state;
    return React.lazy(() => import(`./posts/${selectedPage}`));
  }

  render() {
    const Component = this.getComponentToRender();
    return (
      <Fragment>
        <center>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => this.updatePage("postForm")}
        >
          Ajouter Post
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <Component updatePage={this.updatePage} />
        </Suspense>
        </center>
      </Fragment>
    );
  }
}
