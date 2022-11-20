import { CircularProgress, LinearProgress, Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { IconLogo } from '@/icons';

import './SplashScreen.scss';

export const SplashScreen = observer(() => {
  return (
    <Paper square className='splash-screen'>
      <IconLogo className='logo' />
      <Typography variant='h1' fontWeight='bold'>
        ProtteyKBD
      </Typography>
      <Typography variant='overline'>Магазин кастомных клавиатур</Typography>
      <Typography variant='caption'>v 1.0.0</Typography>
      <LinearProgress />
    </Paper>
  );
});
