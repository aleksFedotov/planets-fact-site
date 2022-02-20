import styled from 'styled-components';

export const DetailInfoList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  grid-area: DetailInfo;
  margin-top: 8.7rem;
`;

export const DetailInfoItem = styled.li`
  padding: 2.3rem;

  width: 100%;
  border: solid 1px rgba(255, 255, 255, 0.2);
`;

export const Parameter = styled.h4`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 1px;
  margin-bottom: 2.3rem;
`;

export const Value = styled.h2`
  font-size: 4rem;
  letter-spacing: -1.5px;
`;
