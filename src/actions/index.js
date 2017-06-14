import axios from 'axios';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const FETCH_BLOG_POST = 'FETCH_BLOG_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY  = '/?key=abhinavsingh';

export function fetchAllPosts(){
  console.log('STEP-1: Reached in action through componentDidMount by dispatcher from Home');
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_ALL_POSTS,
    payload: request
  };
}

export function createNewPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then( ()=> callback());

  return {
    type: CREATE_NEW_POST,
    action: request
  };
}

export function fetchPostDetails(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_BLOG_POST,
    payload: request
  };
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=>callback());
  return {
    type : DELETE_POST,
    payload : request
  };
}
