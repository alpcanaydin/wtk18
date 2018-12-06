import { NavLink } from 'react-router-dom';
import styled from '../../theme';

export const Tabbar = styled.nav`
  display: flex;
  margin-bottom: 16px;
`;

export const TabbarLink = styled(NavLink)`
  color: ${props => props.theme.titleColor};
  margin-top: 0;
  margin-right: 1rem;
  padding-bottom: 4px;
  text-decoration: none;

  :hover,
  &.isActive {
    border-bottom: 2px solid ${props => props.theme.titleColor};
  }
`;
