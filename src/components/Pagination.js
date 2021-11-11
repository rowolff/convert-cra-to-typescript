import { useState } from "react";
import styled from "styled-components";

const PaginationButton = styled.button`
  background: #fff;
  border: none;
  padding: 10px;
  font-size: calc(${(props) => (props.active ? "14px" : "10px")} + 2vmin);
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => {
    if (props.disabled) return "#ccc";
    return props.active ? "black" : "#282c34";
  }};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0 10px;
  cursor: pointer;
  ${(props) => (props.disabled ? "pointer-events: none" : null)}
  ${(props) => (props.disabled ? "box-shadow: none" : null)}
`;

const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const Pagination = ({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <div>
        {/* previous button */}
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          prev
        </PaginationButton>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <PaginationButton
            key={index}
            onClick={changePage}
            active={currentPage === item}
          >
            <span>{item}</span>
          </PaginationButton>
        ))}

        {/* next button */}
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === pages}
        >
          next
        </PaginationButton>
      </div>

      {/* show the posts */}
      <PostList>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </PostList>
    </>
  );
};
