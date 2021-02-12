import React, { Component } from "react";
import classes from "./allpostpage.module.css"
import { connect } from "react-redux";
import Post from "./postpageview";
import EditComponent from "./editpageview";

class AllPost extends Component {
  render() {
    return (
      <div className={classes.allpostwrapper}>
 <h1>All Posts</h1>
 {this.props.posts.map(post => (
<div key={post.id}>
 {post.editing ? (
  <EditComponent post={post} key={post.id} />
 ) : (
 <Post key={post.id} post={post} />
 )}
  </div>
))}
 </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);