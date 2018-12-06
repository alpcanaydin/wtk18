import styled from '../../theme';

const SectionTitle = styled.h5`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.secondaryFontFamily};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export default SectionTitle;
