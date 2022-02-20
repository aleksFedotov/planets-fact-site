import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  padding-bottom: 2rem;
  margin-top: 10rem;
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
`;
