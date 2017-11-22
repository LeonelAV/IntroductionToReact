import React from 'react';
import {Post} from './Post';

export function PostList(props) {
  return (
    <ol>
      { props.postList.map((item, index) =>
        <Post key = {index} 
              title = {item.title}
              score = {item.score}
        />
      )}
    </ol>
  )
}

