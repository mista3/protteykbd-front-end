import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import { ShoppingCartRounded, FavoriteRounded, LoginRounded } from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { loginStore } from '@/stores';
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

  return (
    <Paper className='nav-bar' elevation={1} square>
      <div className='title' onClick={() => nav(ROUTES.HOME)}>
        <IconLogo className='logo' />
        <Typography fontWeight='bold' variant='h3'>
          ProtteyKBD
        </Typography>
      </div>
      <Search />
      <div className='buttons'>
        <IconButton onClick={() => nav(ROUTES.LIKE)} color={location.pathname === ROUTES.LIKE ? 'primary' : 'default'}>
          <FavoriteRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.CART)} color={location.pathname === ROUTES.CART ? 'primary' : 'default'}>
          <ShoppingCartRounded />
        </IconButton>
        <IconButton onClick={() => loginStore.openDialog()} color={loginStore.isDialogOpen ? 'primary' : 'default'}>
          <LoginRounded />
        </IconButton>
      </div>
      <Typography variant='overline' className='breadcrumb'>
        {title}
      </Typography>
      <Filter />
    </Paper>
  );
});
