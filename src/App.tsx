import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, Paper } from '@mui/material';
import { MainPage, OrderPage, LikePage, CartPage, ItemPage } from '@/pages';
import { NavBar, LoginDialog, SplashScreen } from '@/components';
import { darkTheme } from '@/themes';
import { ROUTES } from '@/routes';

import './App.scss';

export const App = observer(() => {
  const [isSplashScreen, setSplashScreen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('visited')) {
      localStorage.setItem('visited', 'yes');
      setSplashScreen(true);
      setTimeout(() => {
        setSplashScreen(false);
      }, 5000);
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className='app' color='background' square>
        <BrowserRouter>
          <NavBar />
          {/* <Filter /> */}
          <Routes>
            <Route path={ROUTES.HOME} element={<MainPage />} />
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path={ROUTES.LIKE} element={<LikePage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path={ROUTES.ITEM} element={<ItemPage />} />
            <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
          </Routes>
          <LoginDialog />
          {isSplashScreen && <SplashScreen />}
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
});

// TODO: production mode, recomendations, steam card effect
