import React, { Component } from "react";
import classes from "./postformpage.module.css"
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };

    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div className={classes.formwrapper}>
<h1>CREATE BLOG</h1>
 <form onSubmit={this.handleSubmit}>
 <input
  ref={input => (this.getTitle = input)}
    required
 type="text"
 placeholder="Enter Post Title"
 />
 <br />
   <br />
   <h1> CREATE DESCRIPTION</h1>
 <textarea
   ref={input => (this.getMessage = input)}
   required
 rows="5"
 cols="28"
  placeholder="Enter Post" />
 <br />
 <br />
 <button>Post</button>
 </form>
      </div>
    );
  }
}
export default connect()(PostForm);