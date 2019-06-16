import marvel from '../api/marvel';

export const login = async (publicKey, privateKey) => {
  if (publicKey === '' || privateKey === '') {
    return {
      error: '',
    };
  }

  const valid = await marvel.verify(publicKey, privateKey);

  if (valid) {
    localStorage.setItem('user', JSON.stringify({
      publicKey,
      privateKey,
    }));

    window.location.assign('/characters');
  }
}

export const logout = () => {
  localStorage.removeItem('user')
  window.location.assign('login');
}

export default {
  login,
  logout,
}