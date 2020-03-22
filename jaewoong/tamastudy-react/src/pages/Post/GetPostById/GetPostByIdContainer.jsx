import React, { useState, useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import useCustomFetch from '../../../hooks/useCustomFetch';

const initialState = {};

const GetPostByIdContainer = ({ match, history }) => {
  const postId = match.params.postId;
  const post = useCustomFetch(initialState, `http://localhost:4000/v1/post/${postId}`);

  //   const fetchPostById = async () => {
  //     try {
  //       const post = await Axios.get(`http://localhost:4000/v1/post/${postId}`);
  //       setPost(post.data.result);
  //     } catch (error) {
  //       toast.error(error.massage.data.error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPostById();
  //   }, [postId]);

  const deletePostById = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await Axios.delete(`http://localhost:4000/v1/post/delete/${postId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success(response.data.result);
      history.push('/posts');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const beforePostById = async () => {
    history.goback();
  };

  console.log(post);

  return <GetPostByIdPresenter post={post} deletePostById={deletePostById} />;
};

export default withRouter(GetPostByIdContainer);
