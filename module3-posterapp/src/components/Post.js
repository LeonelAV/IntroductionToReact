import React from 'react';
import PostButton from './PostButton';
import PostText from './PostText';
//this component represents the posts that
//go in the list of posts.

export function Post(props){
  var style = {
    display: "flex"
  }
  return (
    <div style={style}>
      <PostButton label = "x"/>
      <PostText text = {props.title} width = "200"/>
      <PostButton label = "x"/>
      <PostText text = {props.score} width = "20"/>
      <PostButton label = "-"/>
    </div>
  )
}

