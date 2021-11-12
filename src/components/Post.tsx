import styled from "styled-components";
import React from "react";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: 20px auto;
  padding: 15px 10px;
  background: #1e222a;
`;

const Small = styled.small`
  border: 2px solid #888;
  border-radius: 7px;
  padding: 5px 12px;
  color: #777;
`;

type Data = {
  id: string;
  title: string;
  body: any;
};

type PostProps = {
  data: Data;
};

export const Post: React.FC<PostProps> = ({ data }) => {
  const { id, title, body } = data;
  return (
    <StyledPost>
      <Small>{id}</Small>
      <h1>{title}</h1>
      <p>{body}</p>
    </StyledPost>
  );
};
