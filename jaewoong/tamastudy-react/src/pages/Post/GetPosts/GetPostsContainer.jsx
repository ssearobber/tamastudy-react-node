import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetPostPresents from './GetPostsPresents';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: green;
`;
const ComponentTile = styled.h2`
  text-align: center;
`;
//grid-template-columns : 1fr이란 한 공간이고 비율과 상관없이 4개로 나눈다
//grid-gap란 패딩
const ComponentContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 352px;
  grid-gap: 16px;
`;
//padding 안쪽으로 공간을 주고 싶을 때
//margin은 밖깥쪽 공간을 주고 싶을 때
//border-radius 모서리 깍기
//background-size: cover 정중에서 부터 잘보기게 찾아줌
const PostWrapper = styled.div`
  background-color: blue;
  box-sizing: border-box;
  padding: 32px 0;
  border-radius: 8px;
  box-shadow: 4px 7px 8px -1px #7f7f7f;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imgUrl && props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  transition: transform 200ms ease-out;
  &:hover {
    transform: scale(1.2);
  }
`;
// const PostContents = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   box-sizing: border-box;
//   padding: 24px;
//   background-color: yellow;
// `;

// & > *
const PostContents = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: 32px 24px 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(110, 110, 110, 0.9) 29%,
    rgba(0, 0, 0, 1) 100%
  );
  & > * {
    color: white;
  }
`;

const PostId = styled.div`
  font-weight: 600;
`;
// ellipsis;는 글자가 넘칠 때 ...으로
const PostTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  width: calc(238px - 32px * 2);
  text-overflow: ellipsis;
  overflow: hidden;
`;
const PostUsername = styled.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
`;
const PostCreatedAt = styled.div`
  text-align: right;
`;

//112px를 넘을 때, &::-webkit-scrollbar 를 넣으면 스크롤 바가 안보임
// const PostDescription = styled.div`
//   margin-top: 24px;
//   font-size: 18px;
//   height: 112px;
//   overflow-y: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;
//display: flex ??
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonWrite = styled.button`
  margin: 64px 32px;
  padding: 16px 24px;
  background-color: red;
`;

const GetPostsContainer = () => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState);

  //componentdid 렌더링 후 한번만, componentWill 렌더링 할 때마다 계속불러 옴
  useEffect(() => {
    fetchPosts();
  }, []); // >> [] 안에 값이 변경이 있을 때, 렌더링 해라!!  >> posts있을경우 추가 삭제 되었을 때, 렌더링해라 >> []만 있을 때는 didmount랑 같다

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const result = response.data.results;
    setPosts(result);
  };

  if (posts === initialS gtate) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ComponentTile>포스트 모음</ComponentTile>
      <ComponentContents>
        {posts.map((post) => {
          //화살표 함수에서 return이 존재한다면 return위에 변수같은거 지정하기 위해서 사용
          const { _id, title, username, createdAt, imgUrl } = post;
          return (
            <PostWrapper key={_id} props={imgUrl}>
              <PostContents>
                <PostId>{_id}</PostId>
                <PostTitle>{title}</PostTitle>
                <PostUsername>{username}</PostUsername>
                <PostCreatedAt>{createdAt}</PostCreatedAt>
              </PostContents>
            </PostWrapper>
          );
        })}
      </ComponentContents>
      <ButtonBox>
        <ButtonWrite>포스트 작성</ButtonWrite>
      </ButtonBox>
    </Container>
  );
};

export default GetPostsContainer;
