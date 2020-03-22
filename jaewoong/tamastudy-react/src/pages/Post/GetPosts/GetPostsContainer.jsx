import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

const initialState = [];
const GetPostsContainer = (props) => {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/v1/post?limit=20');
      const result = response.data.result;
      setPosts(result);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  const onClickMoveToCreatePost = () => {
    props.history.push('/posts/createPost');
  };

  if (posts === initialState) {
    return <div>Loading ...</div>;
  }

  return (
    <GetPostsPresenter
      posts={posts}
      handleToastAlert={handleToastAlert}
      onClickMoveToCreatePost={onClickMoveToCreatePost}
    />
  );
};

export default withRouter(GetPostsContainer);
