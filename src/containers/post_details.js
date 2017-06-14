import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPostDetails, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostDetails extends Component {
  static contextTypes = {
    router : PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPostDetails(this.props.params.id);
  }

  deletePost(){
    this.props.deletePost(this.props.params.id, () => {
      this.context.router.push('/');
    });
  }

  render(){
    if(!this.props.post){
      return <h3>Loading</h3>;
    }
    return(
      <div className="container">
        <button className="btn btn-danger pull-xs-right" onClick={this.deletePost.bind(this)} >Delete</button>
        <Link to="/">Back To Home</Link>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    post: state.blogPost.post
  };
}

export default connect(mapStateToProps, {fetchPostDetails, deletePost})(PostDetails);
