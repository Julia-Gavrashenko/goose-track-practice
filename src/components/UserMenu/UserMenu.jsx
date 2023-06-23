
import { LogoutBtn, MenuWrapper, UserName } from "./UserMenu.styled";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/authOperarions";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () =>  dispatch(logOut())


  return (
    <MenuWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button"  onClick={ handleLogout }>
        Logout
      </LogoutBtn>
    </MenuWrapper>
  );
};