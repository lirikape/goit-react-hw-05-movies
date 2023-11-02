import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
  text-decoration: none;
`;

export const Item = styled.li`
  list-style: none;
  margin-top: 20px;
  img {
    border-radius: 5px;
  }
`;
