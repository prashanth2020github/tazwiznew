import React from "react"
import classes from "./app.module.css"
import PostForm from "./postformpageview";
import AllPost from "./allpostpageview"
class App extends React.Component{
  render(){
    return(
      <div className={classes.mainwraper}>
        <div className={classes.headersec}>BLOG PAGE</div>
  <PostForm/>
   <AllPost/>
      </div>
    )
  }
}
export default App
