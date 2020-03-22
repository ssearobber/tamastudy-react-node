import React from 'react';
import ContainerLayout from '../../../components/layout/ContainerLayout';
import Form from '../../../components/atoms/Form';
import Input from '../../../components/atoms/Input';
import Submit from '../../../components/atoms/Submit';

const CreatePostPresenter = ({ formData, handleSubmit, handleChange }) => {
  const { title, description, imgUrl } = formData;
  return (
    <ContainerLayout>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Title" value={title} name="title" onChange={handleChange} />

        <Input
          type="text"
          placeholder="Description"
          value={description}
          name="description"
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="Image Url"
          value={imgUrl}
          name="imgUrl"
          onChange={handleChange}
        />

        <Submit btnText={'작성하기'} />
      </Form>
    </ContainerLayout>
  );
};

export default CreatePostPresenter;
