import {
  TransparentCard,
  LoginTitle,
  LoginBtn,
} from '../components/login';

export const LoginPage = () => {

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
          alt={'google login img'} />

        <LoginBtn
          content={'sign in with github'}
          src={'../../public/img/github.png'}
          alt={'github login img'} />
      </TransparentCard>
    </main>
  )
}