import styled from 'styled-components';

export const ContollersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.7rem;
  grid-area: Controllers;
`;

export const Controller = styled.button`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  width: 100%;
  font-family: inherit;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.isActive ? `var(--${props.planet})` : 'transparent'};
  line-height: 2.5rem;
  letter-spacing: 2.57px;
  font-weight: 700;
  color: var(--main-text);
  padding: 1.8rem 2.5rem;
  border: solid 1px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--dark-gray);
  }
`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2.5rem;
  letter-spacing: 2.57px;
  opacity: 0.5;
  margin-top: -2px;
`;
