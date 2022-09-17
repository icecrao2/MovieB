import {
  TransparentCard,
  LoginTitle,
  LoginBtn,
} from '../components/login';

import { useEffect } from 'react';

export const LoginPage = ({ userManager }) => {

  const {
    user,
    login,
    logout,
    authStateChange,
  } = userManager();

  useEffect(() => {
    authStateChange();

    if (user) {
      console.log(user);
    }
    else {
      console.log('none');
    }
  }, [user]);

  
  const onLogin = (evt) => {
    evt.preventDefault();
    login(evt.currentTarget.children[1].innerText);
  }

  const onLogout = () => {
    logout(() => {
      console.log('success');
    },
      () => {
        console.log('failed!');
      });
  }


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
          onClick={onLogout} />
      </TransparentCard>
    </main>
  )
}