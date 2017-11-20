import React, { Component } from 'react';

//this component represents the square 
//buttons that are part of each of the posts
function PostButton(props){
  var style = {
    width:24,
    height:24
  }
  return (
    <button style = {style}>{props.label}</button>
  )
} 


export default PostButton;
