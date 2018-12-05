import styled from '../../theme';

const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;

  @media (min-width: 34rem) {
    max-width: 36rem;
  }

  @media (min-width: 48rem) {
    max-width: 45rem;
  }

  @media (min-width: 62rem) {
    max-width: 58.75rem;
  }

  @media (min-width: 75rem) {
    max-width: 71.25rem;
  }
`;

export default Container;
