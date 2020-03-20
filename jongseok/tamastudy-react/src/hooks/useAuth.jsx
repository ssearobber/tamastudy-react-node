import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

const initialState = {
  isLoggedIn: false,
  loading: true,
  error: null,
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_STATUS':
      return { ...state, loading: false };
    case 'LOGGED_IN':
      return { ...state, isLoggedIn: true, loading: false };
    case 'LOGGED_OUT':
      return { ...state, isLoggedIn: false, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleLogInFn = () => {
    try {
      dispatch({ type: 'LOADING' });
      setTimeout(() => {
        dispatch({ type: 'LOGGED_IN' });
        localStorage.setItem('token', 'success login test ');
        toast.success('로그인 성공');
      }, 3000);
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
      toast.warn('로그인 실패');
    }
  };

  const handleLogOutFn = () => {
    try {
      dispatch({ type: 'LOGGED_OUT' });
      localStorage.removeItem('token');
      toast.success('로그아웃 성공');
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
      toast.warn('로그아웃 실패');
    }
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_STATUS' });
    if (Boolean(localStorage.getItem('token'))) {
      dispatch({ type: 'LOGGED_IN' });
    }
  }, []);

  const { isLoggedIn, error, loading } = state;

  return {
    isLoggedIn,
    error,
    loading,
    handleLogInFn,
    handleLogOutFn,
  };
};

export default useAuth;
