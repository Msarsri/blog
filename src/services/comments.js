import Axios from "axios";
import { APIS } from "../constants/apis";

export const addComment = (content, postId) => {
  return Axios.post(`${APIS.BASE_URL}${APIS.ENDPOINTS.COMMENTS}`, {
    content,
    post_id: postId
  });
};

export const getCooments = () => {
  return  Axios.get(`${APIS.BASE_URL}${APIS.ENDPOINTS.COMMENTS}`);
};

export const deleteComment = commentId => {
  return Axios.delete(`${APIS.BASE_URL}${APIS.ENDPOINTS.COMMENTS}/${commentId}`);
};

