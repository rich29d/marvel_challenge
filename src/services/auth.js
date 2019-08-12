import backend from '../api/backend';
import { get } from 'lodash';

export const login = async (email, senha) => {
  try {  
    const { token, user, success, messages } = await backend.verify(email, senha);
  
    if (token && user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    }

    return { success, messages };
  } catch (err) {
    console.error(err);
    return get(err, 'response.data', {});
  }  
}

export const register = async (nome, estado, email, senha) => {
  try {  
    const resp = await backend.store({
      nome,
      estado,
      email,
      senha,
    });

    console.log(resp);
  } catch (err) {
    console.error(err);
    return get(err, 'response.data', {});
  }  
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.assign('#/login');
}

export default {
  login,
  logout,
  register,
}