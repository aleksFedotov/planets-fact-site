import styled, { css } from 'styled-components';

export const ContollersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.7rem;
  grid-area: Controllers;

  @media (max-width: 1010px) {
    margin-top: 0;
    align-self: center;
    justify-self: end;
    max-width: 28.1rem;
    width: 100%;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 4rem;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    max-width: 100%;
  }
`;

export const Controller = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;

  gap: 2.8rem;
  width: 100%;

  background-color: ${(props) =>
    props.isActive ? `var(--${props.planet})` : 'transparent'};

  font-family: inherit;
  text-transform: uppercase;

  line-height: 2.5rem;
  letter-spacing: 2.57px;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem 1rem 2.5rem;
  color: var(--main-text);

  border: solid 1px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--dark-gray);
  }

  @media (max-width: 1010px) {
    font-size: 0.9rem;
    padding: 0.8rem 2rem 0.6rem 2rem;
    gap: 2.6rem;
    letter-spacing: 1.93px;
  }

  @media (max-width: 700px) {
    background-color: transparent;
    border: none;

    opacity: 0.5;
    display: flex;
    justify-content: center;
    padding: 1.2rem 0rem 1rem 0rem;

    &::after {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--${(props) => props.planet});
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    ${(props) =>
      props.isActive
        ? css`
            opacity: 1;
            &::after {
              transform: scaleX(1);
            }
          `
        : ''};
  }
`;

export const Number = styled.span`
  opacity: 0.5;
  align-self: center;

  @media (max-width: 700px) {
    display: none;
  }
`;
