//this component  represents the text areas 
//that are a part of each of the posts

import React from 'react';

function PostText(props){
  var style =  {
    border: "1px solid black",
    width: props.width
  }
  return(
    <div style = {style}>{props.text}</div>
  )
}

export default PostText;