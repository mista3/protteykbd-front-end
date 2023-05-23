import { observer } from 'mobx-react-lite';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField } from '@mui/material';
import { userStore } from '@/stores';

import './LoginDialog.scss';

export const LoginDialog = observer(() => {

  return (
    <Dialog open={userStore.isDialogOpen} onClose={() => userStore.closeDialog()} className='login-dialog'>
      <DialogTitle>{userStore.isSignIn ? 'Вход' : 'Регистрация'}</DialogTitle>
      <DialogContent>
        <TextField
          label='Логин'
          type='email'
          color='secondary'
          value={userStore.emailInput}
          onChange={(e) => userStore.setEmailInput(e.target.value)}
        />
        <TextField
          label='Пароль'
          type='password'
          color='secondary'
          value={userStore.passInput}
          onChange={(e) => userStore.setPassInput(e.target.value)}
        />
        {userStore.isSignIn ? null : <TextField label='Пароль повторно' type='password' color='secondary' />}
        <Link component='button' variant='body2' color='text.secondary' onClick={() => userStore.toggleSignIn()}>
          {userStore.isSignIn ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => userStore.auth()}>{userStore.isSignIn ? 'Войти' : 'Зарегистрироваться'}</Button>
      </DialogActions>
    </Dialog>
  );
});
