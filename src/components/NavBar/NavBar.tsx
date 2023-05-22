import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import { ShoppingCartRounded, FavoriteRounded, LoginRounded, LogoutRounded} from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { loginStore } from '@/stores';
import { userStore } from '@/stores';
import { getRouteLabel, ROUTES } from '@/routes';
import { Search, Filter } from '@/components';
import { useTitle } from '@/hooks';

import './NavBar.scss';

export const NavBar = observer(() => {
  const nav = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useTitle();

  useEffect(() => {
    setTitle(getRouteLabel(location.pathname));
  }, [location]);

  const onLoginButtonClick = () => {
      if (userStore.isSigned){
          fetch( 'http://127.0.0.1:5000/logout', {
              method: 'POST',
              credentials: 'include',
          }).then(() => {
              userStore.logout();
          })
      } else {
          loginStore.openDialog()
      }
    };

  return (
    <Paper className='nav-bar' elevation={1} square>
      <div className='title' onClick={() => nav(ROUTES.HOME)}>
        <IconLogo className='logo' />
        <Typography fontWeight='bold' variant='h4' textTransform='uppercase'>
          Prottey
        </Typography>
      </div>
      {/* <Search /> */}
      <div className='buttons'>
        <IconButton onClick={() => nav(ROUTES.LIKE)} color={location.pathname === ROUTES.LIKE ? 'primary' : 'default'}>
          <FavoriteRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.CART)} color={location.pathname === ROUTES.CART ? 'primary' : 'default'}>
          <ShoppingCartRounded />
        </IconButton>
        <IconButton onClick={() => onLoginButtonClick()} color={loginStore.isDialogOpen ? 'primary' : 'default'}>
            {userStore.isSigned ? <LogoutRounded /> : <LoginRounded />}
        </IconButton>
      </div>
      <Typography variant='overline' className='breadcrumb'>
        {title}
      </Typography>
      {/* <Filter /> */}
    </Paper>
  );
});
