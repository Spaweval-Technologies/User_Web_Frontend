'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/store/hooks';
import { getUserByEmail, setUserInfo } from '@/redux/actions/userSlice';
import { getItemWithExpiry } from '@/library/helperFunctions';
import jwt from 'jsonwebtoken';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getItemWithExpiry('auth_token');

    if (!token) return;

    const fetchUser = async () => {
      const email = jwt.decode(token) as { email: string } | null;
      try {
        const res = await dispatch(
          getUserByEmail({ auth_token: token, email: email?.email || '' })
        );

        if (res.meta.requestStatus === 'rejected') {
          localStorage.removeItem('auth_token');
          return;
        } else if (res.meta.requestStatus === 'fulfilled') {
          const user = res.payload;
          if (!user) {
            localStorage.removeItem('auth_token');
            return;
          }
          dispatch(
            setUserInfo({
              auth_token: token,
              name: user.name,
              email: user.email,
              mobile_number: user.mobile_number,
              email_verified: user.email_verified,
              id: user.id,
            })
          );
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        localStorage.removeItem('auth_token');
      }
    };
    fetchUser();
  }, []);

  return <>{children}</>;
};

export default UserProvider;
