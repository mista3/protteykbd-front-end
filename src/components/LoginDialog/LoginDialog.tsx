import { loginStore } from '@/stores';
import { userStore } from '@/stores';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';

import './LoginDialog.scss';
import {useState} from "react";
import {ROUTES} from "@/routes";
import {useNavigate} from "react-router-dom";

export const LoginDialog = observer(() => {
    const nav = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const authUser = (e: any) => {
        e.preventDefault();
        const user = {email, password}
        if (loginStore.isSignin) {
            fetch( 'http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                credentials: 'include',
                body: JSON.stringify(user)
            }).then(
                res => res.json()
            ).then(
                data => {
                    console.log(data);
                    userStore.setId(data.id);
                    nav(ROUTES.HOME);
                    loginStore.closeDialog();
                }
        );
        } else {
            fetch( 'http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                credentials: 'include',
                body: JSON.stringify(user)
            }).then(() => {
                loginStore.toggleSignIn();
            })
        }
    }

  return (
    <Dialog open={loginStore.isDialogOpen} onClose={() => loginStore.closeDialog()} className='login-dialog'>
      <DialogTitle>{loginStore.isSignin ? 'Вход' : 'Регистрация'}</DialogTitle>
      <DialogContent>
        <TextField label='Логин'
                   type='email'
                   color='secondary'
                   value={email}
                   onChange={(e) => setEmail((e.target.value))}
        />
        <TextField label='Пароль'
                   type='password'
                   color='secondary'
                   value={password}
                   onChange={(e) => setPassword((e.target.value))}
        />
        {loginStore.isSignin || <TextField label='Пароль повторно' type='password' color='secondary' />}
        <Link component='button' variant='body2' color='text.secondary' onClick={() => loginStore.toggleSignIn()}>
          {loginStore.isSignin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => authUser(e)}>{loginStore.isSignin ? 'Войти' : 'Зарегистрироваться'}</Button>
      </DialogActions>
    </Dialog>
  );
});
