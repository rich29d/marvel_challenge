import characters from '../api/character';

export const login = async (publicKey, privateKey) => {
  if (publicKey === '' || privateKey === '') {
    return {
      error: '',
    };
  }
  
  const user = {
    publicKey,
    privateKey,
  }

  localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(user));

  const list = await characters.index();

  console.log(list);
  
  window.location.assign('/');
}

export const logout = () => {
  localStorage.removeItem('user')
  window.location.assign('login');
}

export default {
  login,
  logout,
}