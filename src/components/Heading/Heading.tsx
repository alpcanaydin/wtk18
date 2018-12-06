import styled, { css } from '../../theme';

const shared = css`
  font-family: ${props => props.theme.secondaryFontFamily};
  font-weight: 500;
  font-size: 3.44rem;
  color: ${props => props.theme.titleColor};
  line-height: ${props => props.theme.titleLineHeight};
  margin-top: 0;
  margin-bottom: 1.75rem;
`;

export const H1 = styled.h1`
  ${shared}
  font-size: 3.44em;
  letter-spacing: -2px;
`;

export const H2 = styled.h2`
  ${shared}
  font-size: 3em;
  letter-spacing: -2px;
`;

export const H3 = styled.h3`
  ${shared}
  font-size: 2.33em;
  letter-spacing: -1px;
`;
