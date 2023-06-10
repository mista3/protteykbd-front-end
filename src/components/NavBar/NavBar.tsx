import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import {
  ShoppingCartRounded,
  LoginRounded,
  LogoutRounded,
  HandymanRounded,
  ViewListRounded,
  FavoriteRounded,
  InfoRounded,
} from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { userStore } from '@/stores';
import { getRouteLabel, ROUTES } from '@/routes';
import { useTitle } from '@/hooks';

import './NavBar.scss';

export const NavBar = observer(() => {
  const nav = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useTitle();

  useEffect(() => {
    setTitle(getRouteLabel(location.pathname));
  }, [location]);

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
        <IconButton onClick={() => nav(ROUTES.INFO)} color={location.pathname === ROUTES.INFO ? 'primary' : 'default'}>
          <InfoRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.HOME)} color={location.pathname === ROUTES.HOME ? 'primary' : 'default'}>
          <ViewListRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.LIKE)} color={location.pathname === ROUTES.LIKE ? 'primary' : 'default'}>
          <FavoriteRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.CART)} color={location.pathname === ROUTES.CART ? 'primary' : 'default'}>
          <ShoppingCartRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.CONSTRUCTOR)} color={location.pathname === ROUTES.CONSTRUCTOR ? 'primary' : 'default'}>
          <HandymanRounded />
        </IconButton>
        <IconButton
          onClick={() => userStore.onSignButtonClick()}
          color={userStore.isDialogOpen ? 'primary' : 'default'}
        >
            {userStore.user ? <LogoutRounded /> : <LoginRounded />}
        </IconButton>
      </div>
      <Typography variant='overline' className='breadcrumb'>
        {title}
      </Typography>
      {/* <Filter /> */}
    </Paper>
  );
});
