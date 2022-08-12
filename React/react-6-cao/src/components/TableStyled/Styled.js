import styled from 'styled-components';

export const BillTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  box-shadow: 0.1rem 0.1rem 0.5rem gray;
  padding: 0.5rem;
`;

export const BillTable = styled.table`
  & {
    border-collapse: collapse;
  }
  & tbody:nth-child(even) {
    background-color: rgb(248, 222, 222);
  }
  & {
    th,
    td {
      padding: 0.5rem;
    }
  }
  & :hover {
    background-color: limegreen;
  }
`;
