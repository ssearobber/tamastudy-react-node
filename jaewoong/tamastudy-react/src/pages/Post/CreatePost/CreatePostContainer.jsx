import React, { useState } from 'react';
import CreatePostPresenter from './CreatePostPresenter';
import useAuthContext from '../../../hooks/useAuthContext';
import { Redirect, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  title: '',
  description: '',
  imgUrl: '',
};

const CreatePostContainer = ({ history }) => {
  const [formData, setFormData] = useState(initialState);

  const ctxData = useAuthContext();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // 새로고침을 지우는 것
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('invalid token');
      }
      await axios.post('http://localhost:4000/v1/post/create', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success('작성이 완료 되었습니다');
      history.push('/posts');
    } catch (error) {
      //   console.log(error);
      //   const errorArr = error.response.data.error.split(',');
      //   errorArr.map((err) => error(err));
      //   toast.error(`작성이 실패 되었습니다'\n${error.response.data.error}`);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  if (ctxData.authLoading) {
    return <div>Loading...</div>;
  }

  if (!ctxData.isLoggedIn) {
    return <Redirect to={'/login'} />;
  }

  return (
    <div>
      <CreatePostPresenter
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default withRouter(CreatePostContainer); // withRouter를 사용하면 이 컴포넌트에서 props로 받는다. 그래서 const CreatePostContainer = ({ history })로 받는다.
