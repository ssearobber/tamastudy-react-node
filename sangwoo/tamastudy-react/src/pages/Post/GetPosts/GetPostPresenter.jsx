import React from 'react';
import styled from '@emotion/styled';
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ComponentTitle = styled.h1`
  text-align: center;
`;

const ComponentContents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 352px;
  grid-gap: 48px;
`;
const PostContents = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: 32px 24px 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(110, 110, 110, 0.9) 29%,
    rgba(0, 0, 0, 1) 100%
  );
  & > * {
    color: white;
  }
`;

const PostWrapper = styled.div`
  background-color: teal;
  box-sizing: border-box;
  padding: 32px 0;
  border-radius: 8px;
  box-shadow: 4px 7px 8px -1px #7f7f7f;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 800ms ease-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const PostId = styled.div`
  font-weight: 600;
`;
const PostTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  width: calc(238px- 32px * 2);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const PostUserName = styled.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
`;
const PostDescription = styled.div`
  margin-top: 24px;
  font-size: 18px;
  height: 160px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostCreatedAt = styled.div`
  text-align: right;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const WriteButton = styled.div`
  margin: 64px 32px;
  padding: 16px 24px;
  background-color: red;
`;

const GetPostPresenter = ({ Posts }) => {
  return (
    <Container>
      <ComponentTitle>포스트모음</ComponentTitle>
      <ComponentContents>
        {Posts.map((post) => {
          return (
            <PostWrapper key={post._id} imgUrl={post.imgUrl}>
              <PostContents>
                <PostId>{post._id}</PostId>
                <PostTitle>{post.title}</PostTitle>
                <PostUserName>{post.username}</PostUserName>
                <PostCreatedAt>{post.createdAt}</PostCreatedAt>
                {/* <PostDescription>{post.description}</PostDescription> */}
              </PostContents>
            </PostWrapper>
          );
        })}
      </ComponentContents>
      <ButtonBox>
        <WriteButton>포스트작성</WriteButton>
      </ButtonBox>
    </Container>
  );
};

export default GetPostPresenter;
