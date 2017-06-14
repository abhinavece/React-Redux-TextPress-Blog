import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/index';
import { Link } from 'react-router';
import moment from 'moment';

class Home extends Component {
  componentWillMount(){
    this.props.fetchAllPosts();
  }

  renderPosts(){
    console.log('this.props.posts', this.props.posts);
    return this.props.posts.map(function(post){
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}/`}>
            <span><strong>{post.title}</strong></span>
          </Link>
          <span className="pull-xs-right" style={{fontSize: 11}} >{post.categories}</span>
          <div className="pull-xs-center">
             <span style={{fontSize: 11}} >Created on: {moment().format('lll')}</span>
          </div>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="text-sm-right" >
          <Link to="/posts/new">
            <button type="button" className="btn btn-primary">Add New Post</button>
          </Link>
        </div>
        <ul className="list-group">
          <h3>Posts:</h3>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.allPosts.all
  };
}

export default connect(mapStateToProps, {fetchAllPosts})(Home);
