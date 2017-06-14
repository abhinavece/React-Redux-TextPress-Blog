import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './containers/home';
import NewPost from './containers/new_post';
import PostDetails from './containers/post_details';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={PostDetails} />
  </Route>
);
