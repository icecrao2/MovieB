

export const emailController = () => {

  const getEmail = () => {
    return window.localStorage.getItem('email');
  }

  const setEmail = (email) => {
    window.localStorage.setItem('email', email);
  }

  const emailConverter = () => {
    return getEmail().replace('.', '*');
  }

  return { getEmail, setEmail, emailConverter }

}