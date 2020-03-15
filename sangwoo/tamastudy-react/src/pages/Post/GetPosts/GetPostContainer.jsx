import React, { useState, useEffect, isValidElement } from 'react';
import GetPostPresenter from './GetPostPresenter';
import axios from 'axios';

const GetPostContainer = () => {
  const initialState = [];
  const [Posts, setPosts] = useState(initialState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const result = response.data.result;
    setPosts(result);
  };
  if (Posts === initialState) {
    return <div>Loading...</div>;
  }
  console.log(Posts);

  return <GetPostPresenter Posts={Posts} />;
};

export default GetPostContainer;
