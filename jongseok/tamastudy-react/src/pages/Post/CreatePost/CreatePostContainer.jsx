import React, { useState } from 'react';
import CreatePostPresenter from './CreatePostPresenter';
import { Redirect, withRouter } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  title: '',
  description: '',
  imgUrl: '',
};

const CreatePostContainer = ({ history }) => {
  const [formData, setFormData] = useState(initialState);

  const ctxData = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('invalid token');
      }
      await axios.post('http://localhost:4000/v1/post/create', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success('작성이 완료 되었습니다.');
      history.push('/posts');
    } catch (error) {
      const errorArr = error.response.data.error.split(',');
      errorArr.map((err) => toast.error(err));
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (ctxData.authLoading) {
    return <div>Loading ...</div>;
  }

  if (!ctxData.isLoggedIn) {
    return <Redirect to={'/login'} />;
  }

  return (
    <CreatePostPresenter
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withRouter(CreatePostContainer);
