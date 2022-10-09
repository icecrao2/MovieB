import {
  TransparentCard,
  LoginTitle,
  LoginBtn,
} from '../components/login';

import { useEffect } from 'react';
import { page_mover } from '../hooks/page_mover.js';

export const LoginPage = ({ user, login, checkAuth }) => {

  const { movePage } = page_mover();


  useEffect(() => {
    //checkAuth();

    if (user) {
      movePage('/main/now_playing');
      window.localStorage.setItem('email', user.email);
    }
    else {
    }
  }, [user]);


  const onLogin = (evt) => {
    evt.preventDefault();
    login(evt.currentTarget.children[1].innerText);
  }

  /*
  const onLogout = () => {
    logout(() => {
      console.log('success');
    },
      () => {
        console.log('failed!');
      });
  }
  */


  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <main style={style}>
      <TransparentCard>
        <LoginTitle content={'로그인'} />
        <LoginBtn
          content={'sign in with google'}
          src={'../../public/img/google.png'}
          alt={'google login img'}
          backgroundColor={'white'}
          onClick={onLogin} />

        <LoginBtn
          content={'sign in with github'}
          src={'../../public/img/github.png'}
          alt={'github login img'}
          color={'white'}
          onClick={onLogin} />
      </TransparentCard>
    </main>
  )
}