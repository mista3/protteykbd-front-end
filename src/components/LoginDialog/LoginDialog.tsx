import { loginStore } from '@/stores';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';

import './LoginDialog.scss';

export const LoginDialog = observer(() => {
  return (
    <Dialog open={loginStore.isDialogOpen} onClose={() => loginStore.closeDialog()} className='login-dialog'>
      <DialogTitle>{loginStore.isSignin ? 'Вход' : 'Регистрация'}</DialogTitle>
      <DialogContent>
        <TextField label='Логин' type='email' color='secondary' />
        <TextField label='Пароль' type='password' color='secondary' />
        {loginStore.isSignin || <TextField label='Пароль повторно' type='password' color='secondary' />}
        <Link component='button' variant='body2' color='text.secondary' onClick={() => loginStore.toggleSignIn()}>
          {loginStore.isSignin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
        </Link>
      </DialogContent>
      <DialogActions>
        <Button>{loginStore.isSignin ? 'Войти' : 'Зарегистрироваться'}</Button>
      </DialogActions>
    </Dialog>
  );
});
