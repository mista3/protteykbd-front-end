import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import {
  LightModeRounded,
  DarkModeRounded,
  LoginRounded,
  ShoppingCartRounded,
  FavoriteRounded,
  HistoryRounded,
} from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { themeStore } from '@/stores';
import { routes } from '@/routes';
import { Search } from '@/components';

import './NavBar.scss';

export const NavBar = observer(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const nav = useNavigate();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isThin = useMemo(() => scrollPosition > 100, [scrollPosition]);

  return (
    <Paper className={`nav-bar ${isThin ? 'thin' : ''}`} elevation={1} square>
      <div className='title' onClick={() => nav(routes.main)}>
        <IconLogo className='logo' />
        <Typography fontWeight='bold'>ProtteyKBD</Typography>
      </div>
      <Search />
      <div className='buttons'>
        <IconButton onClick={() => nav(routes.history)}>
          <HistoryRounded />
        </IconButton>
        <IconButton onClick={() => nav(routes.favorite)}>
          <FavoriteRounded />
        </IconButton>
        <IconButton onClick={() => nav(routes.cart)}>
          <ShoppingCartRounded />
        </IconButton>
        <IconButton onClick={() => themeStore.toggle()}>
          {themeStore.isDark ? <DarkModeRounded /> : <LightModeRounded />}
        </IconButton>
      </div>
    </Paper>
  );
});
