import { combineReducers } from 'redux';
import {fetchAllPosts, fetchBlogPosts} from './reducer_data';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  allPosts: fetchAllPosts,
  blogPost: fetchBlogPosts,
  form: formReducer
});

export default rootReducer;
