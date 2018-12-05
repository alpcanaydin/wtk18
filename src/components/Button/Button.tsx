import styled from '../../theme';

const Button = styled.button`
  padding: 18px 30px;
  border-width: 0;
  transition: background-color 0.1s;
  font-family: ${props => props.theme.secondaryFontFamily};
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    opacity: 0.9;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.bodyColor};
`;
