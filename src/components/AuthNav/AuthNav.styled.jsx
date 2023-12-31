import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  font-size: 18px;

  &:hover,
  &:focus {
    color: #ffc400;
  }
  &.active {
    color: #ffc400;
  }
`;
