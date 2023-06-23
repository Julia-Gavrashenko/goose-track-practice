import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  gap: 12px;
  text-decoration: none;

  font-weight: 700;
  font-size: 18px;
  color: #ffc400;
`;

export const LogoutBtn = styled.button`
  gap: 12px;
  text-decoration: none;

  font-weight: 700;
  font-size: 18px;
  color: #2a363b;

  &:hover,
  &:focus {
    color: #ffc400;
  }
  &.active {
    color: #ffc400;
  }
`;
