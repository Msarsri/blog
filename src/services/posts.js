import Axios from "axios";
import { APIS } from "../constants/apis";
import { deleteComment, getCooments } from "./comments";

export const addPost = content => {
  return Axios.post(`${APIS.BASE_URL}${APIS.ENDPOINTS.POSTS}`, {
    content
  });
};

export const getPosts = () => {
  return Axios.get(`${APIS.BASE_URL}${APIS.ENDPOINTS.POSTS}`);
};

export const addComment = (content, postId) => {
  return Axios.post(`${APIS.BASE_URL}${APIS.ENDPOINTS.COMMENTS}`, {
    content,
    post_id: postId
  });
};

export const deletePost = postId => {
  return Axios.delete(`${APIS.BASE_URL}${APIS.ENDPOINTS.POSTS}/${postId}`);
};

export const deletePostThenComments = (postId) => {
    let filtredComments = [];
  getCooments()
    .then(comments => {
        filtredComments =
      comments.data
        .filter(comment => comment.post_id === postId);
        if(filtredComments.length > 0) {
        filtredComments.map(expectedCoemment =>
          deleteComment(expectedCoemment.id)
        )}
           deletePost(postId).then(() => getPosts()).catch(error => console.log(error))
    })
    .catch(error => console.log(error));
};
