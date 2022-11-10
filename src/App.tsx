import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, useMediaQuery, Paper } from '@mui/material';
import { MainPage, OrderPage } from '@/pages';
import { NavBar } from '@/components';
import { themeStore } from '@/stores';
import { darkTheme, lightTheme } from '@/themes';
import { routes } from '@/routes';

import './App.scss';

export const App = observer(() => {
  const preferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => themeStore.setDark(preferDarkTheme), [preferDarkTheme]);

  return (
    <ThemeProvider theme={themeStore.isDark ? darkTheme : lightTheme}>
      <Paper className='app' color='background'  >
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path={routes.main} element={<MainPage />} />
            <Route path={routes.order} element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
});

// TODO: production mode
