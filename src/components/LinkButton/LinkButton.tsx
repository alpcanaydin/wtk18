import { Link } from 'react-router-dom';
import styled from '../../theme';

const LinkButton = styled(Link)`
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
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

export const PrimaryLinkButton = styled(LinkButton)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
`;

export const SecondaryLinkButton = styled(LinkButton)`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.bodyColor};
`;
