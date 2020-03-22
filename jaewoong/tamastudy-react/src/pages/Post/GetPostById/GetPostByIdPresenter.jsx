import React from 'react';
import Button from '../../../components/atoms/Button';

const GetPostByIdPresenter = ({ post, deletePostById }) => {
  return (
    <div>
      <div>View : {post.view}</div>
      <div>Title : {post.title}</div>
      <div>description : {post.description}</div>
      <div>
        <img src={post.imgUrl} alt="" />
      </div>
      <div>createdAt : {post.createdAt}</div>
      <Button backgroundColor={'red'} text={'삭제'} onClick={deletePostById}></Button>
      <Button backgroundColor={'yellow'} text={'이전'} onClick={deletePostById}></Button>
    </div>
  );
};

export default GetPostByIdPresenter;
