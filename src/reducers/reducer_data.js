import { FETCH_ALL_POSTS, FETCH_BLOG_POST } from '../actions/index';

const INITIAL_STATE = { all:[], post: null };

export var fetchAllPosts = (state=INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_ALL_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

export var fetchBlogPosts = (state = INITIAL_STATE, action) => {
	switch(action.type){

		case FETCH_BLOG_POST:
			return { ...state, post: action.payload.data	}
		default:
      		return state;
	}
}