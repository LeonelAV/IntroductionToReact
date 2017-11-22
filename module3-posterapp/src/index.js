import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {Post} from './components/Post';
import {PostList} from './components/PostList'

ReactDOM.render(<App postList = {[1,2,3,4,5]} />, document.getElementById('root'));

