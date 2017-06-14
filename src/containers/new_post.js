import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {Link, history} from 'react-router';
import {connect} from 'react-redux';
import {createNewPost} from '../actions/index';

class NewPost extends Component {

  constructor(props){
    super(props);
    this.state={};
    this.onSubmit=this.onSubmit.bind(this);
  }

  static contextTypes = {
    router : PropTypes.object
  };

  onSubmit(values){
    this.props.createNewPost(values, () => {
      this.context.router.push("/");
    } );
  }

  renderField(field){
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''} `} >
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          { field.meta.touched && field.meta.error && <span className="has-danger">{field.meta.error}</span>}
        </div>
      </div>
    );
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit)} >
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />

        <button type="submit" className="btn btn-primary" >Submit</button>
        <Link to="/"><button  className="btn btn-danger" >Cancel</button></Link>
      </form>
    );
  }
}

function validate(values){
  //console.log(values) -> {title: 'asdf', Categories: 'asdf', content: 'asdf'}
  const errors ={};

  // If errors has *any* properties then form will not be submitted.
  // If it doesnt have any properties then form is valid and is able to be submitted.

  if(!values.title || values.title.length<=3){
    errors.title="Enter a title with atleast 3 characters!";
  }
  if(!values.categories){
    errors.categories="Enter categories";
  }
  if(!values.content){
    errors.content="Enter a content";
  }

  return errors;

}

export default reduxForm({
  form : 'PostNewForm',
  validate: validate
})(
  connect(null, {createNewPost})(NewPost)
);
