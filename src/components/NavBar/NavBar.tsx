import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, IconButton, Paper } from '@mui/material';
import { LightModeRounded, DarkModeRounded } from '@mui/icons-material';
import { IconLogo } from '@/icons';
import { themeStore } from '@/stores';
import { routes } from '@/routes';

import './NavBar.scss';

export const NavBar = observer(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate()

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
    <Paper className={`nav-bar ${isThin ? 'thin' : ''}` } elevation={1}>
      <div className='title' onClick={()=>navigate(routes.main)}>
        <IconLogo className='logo' />
        <Typography fontWeight='bold'>ProtteyKBD</Typography>
      </div>
      <IconButton onClick={() => themeStore.toggle()}>
        {themeStore.isDark ? <DarkModeRounded /> : <LightModeRounded />}
      </IconButton>
    </Paper>
  );
});
