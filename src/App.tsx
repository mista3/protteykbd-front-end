import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, useMediaQuery, Paper } from '@mui/material';
import { MainPage, OrderPage, LikePage } from '@/pages';
import { NavBar } from '@/components';
import { themeStore } from '@/stores';
import { darkTheme, lightTheme } from '@/themes';
import { ROUTES } from '@/routes';

import './App.scss';
import { LoginDialog } from './components/LoginDialog';

export const App = observer(() => {
  const preferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => themeStore.setDark(preferDarkTheme), [preferDarkTheme]);

  return (
    <ThemeProvider theme={themeStore.isDark ? darkTheme : lightTheme}>
      <Paper className='app' color='background' square>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={ROUTES.HOME} element={<MainPage />} />
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path={ROUTES.LIKE} element={<LikePage />} />
            <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
          </Routes>
          <LoginDialog />
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
});

// TODO: production mode, loader on start
