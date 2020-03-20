import { useState } from 'react';
import { toast } from 'react-toastify';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInFn = () => {
    try {
      localStorage.setItem('token', 'success login test ');
      setIsLoggedIn(true);
      toast.success('로그인 성공');
    } catch (error) {
      toast.warn('로그인 실패');
    }
  };

  const handleLogOutFn = () => {
    try {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      toast.success('로그아웃 성공');
    } catch (error) {
      toast.warn('로그아웃 실패');
    }
  };

  return {
    isLoggedIn,
    handleLogInFn,
    handleLogOutFn,
  };
};

export default useAuth;
