import React from 'react';
import ReactDOM from 'react-dom';

import {Post} from './components/Post';
import {PostList} from './components/PostList'

ReactDOM.render(<PostList postList = {[1,2,3,4,5]} />, document.getElementById('root'));

