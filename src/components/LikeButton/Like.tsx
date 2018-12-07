import React from 'react';

import styled from '../../theme';

interface Props {
  width: number;
  isLiked: boolean;
}

const Svg = styled.svg`
  vertical-align: middle;
`;

const Path = styled('path')<{ isLiked: boolean }>`
  fill: ${props => (props.isLiked ? props.theme.primaryColor : props.theme.whiteColor)};
  fill-rule: evenodd;
  stroke-width: 3px;
  stroke: ${props => (props.isLiked ? props.theme.primaryColor : props.theme.titleColor)};
`;

const Like = ({ width, isLiked }: Props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 52 49">
    <Path
      isLiked={isLiked}
      d="M25.85 9.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L25.85 47 8.402 31.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C1.734 7.179 6.936 1 14.159 1c5.363 0 9.673 3.343 11.691 8.126z"
    />
  </Svg>
);

export default Like;
