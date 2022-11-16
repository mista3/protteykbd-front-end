import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import {
  LightModeRounded,
  DarkModeRounded,
  ShoppingCartRounded,
  FavoriteRounded,
  HistoryRounded,
} from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { themeStore } from '@/stores';
import { getRouteLabel, ROUTES } from '@/routes';
import { Search } from '@/components';
import { useTitle } from '@/hooks';

import './NavBar.scss';
import { useEffect } from 'react';

export const NavBar = observer(() => {
  const nav = useNavigate();
  const location = useLocation();
  const { title, setTitle } = useTitle();

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
        <IconButton
          onClick={() => nav(ROUTES.HISTORY)}
          color={location.pathname === ROUTES.HISTORY ? 'primary' : 'default'}
        >
          <HistoryRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.LIKE)} color={location.pathname === ROUTES.LIKE ? 'primary' : 'default'}>
          <FavoriteRounded />
        </IconButton>
        <IconButton onClick={() => nav(ROUTES.CART)} color={location.pathname === ROUTES.CART ? 'primary' : 'default'}>
          <ShoppingCartRounded />
        </IconButton>
        <IconButton onClick={() => themeStore.toggle()}>
          {themeStore.isDark ? <DarkModeRounded /> : <LightModeRounded />}
        </IconButton>
      </div>
      <Typography className='breadcrumb'>{title}</Typography>
    </Paper>
  );
});
