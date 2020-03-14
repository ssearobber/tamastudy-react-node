import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';

const GetPostsContainer = () => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/posts');
      const result = response.data.result;
      setPosts(result);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  if (posts === initialState) {
    return <div>Loading ...</div>;
  }

  return <GetPostsPresenter posts={posts} handleToastAlert={handleToastAlert} />;
};

export default GetPostsContainer;
