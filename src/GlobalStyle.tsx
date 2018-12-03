import { createGlobalStyle } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
    line-height: ${props => props.theme.lineHeight};
    text-align: left;
  }
`;

export default GlobalStyle;
