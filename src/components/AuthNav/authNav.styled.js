import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ActivePage = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #246170;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  // padding: 14px;
  // margin-left: 50px;
  font-weight: 600;
  font-size: 22px;
  color: rgba(32, 29, 16, 0.842);
  transition: all, 250ms;

  &.active {
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.274);
  }
`;
