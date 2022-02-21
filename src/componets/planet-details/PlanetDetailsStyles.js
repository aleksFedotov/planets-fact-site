import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 4rem 3.6rem;

  margin-top: 10rem;

  @media (max-width: 700px) {
    margin-top: 0rem;
    padding: 0 0 3.6rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'Image MainInfo' 'Image Controllers' 'DetailInfo DetailInfo';
  grid-template-columns: 1fr 35rem;

  max-width: 110rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1010px) {
    grid-template-areas: 'Image Image' 'MainInfo Controllers' 'DetailInfo DetailInfo';
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: block;
  }
`;
