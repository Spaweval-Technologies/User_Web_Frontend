'use client';
import Images from '../../../../../public/Images';
import SignupOtpVerify from '@/components/SignupOtpVerify';

//css
import { Img, VerifyWrapper } from '../../index.styles';
import PageProps from './index.d';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/store/hooks';
import { signupTokenAuthenticate } from '@/redux/actions/authSlice';
import Link from 'next/link';

/**
 * SignupVerify page component that renders the OTP verification step
 * during the signup process, alongside a decorative background image.
 * @returns {JSX.Element} A React component containing the SignupOtpVerify form
 * and a visual background image.
 */
const SignupVerify = ({ params }: PageProps) => {
  const { token } = params; // Extract token from params, if needed for verification
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const [tokenVerified, setTokenVerified] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const authenticateSignupToken = async (token: string) => {
    if (!token) {
      setError('Token is required for verification');
      setTokenVerified(false);
      return;
    }
    try {
      setError(null);
      setTokenVerified(true);
      const response = await dispatch(signupTokenAuthenticate({ token }));

      if (response.meta.requestStatus === 'rejected') {
        setTokenVerified(false);
        setError(response.payload?.error);
      } else if (response?.meta?.requestStatus === 'fulfilled') {
        setError(null);
        setTokenVerified(true);
        setEmail(response?.payload?.user?.email); // Assuming the response contains the email
      }
    } catch (error) {
      setTokenVerified(false);
      setError('Error authenticating signup token');
    }
  };

  useEffect(() => {
    authenticateSignupToken(token);
  }, [token]);

  return (
    <VerifyWrapper>
      {tokenVerified && !error && email && (
        <>
          <div>
            Token Verified.
            <p>Successfully Registerd!</p>
            <Link href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
              Click here to login
            </Link>
          </div>
          {/* <SignupOtpVerify token={token} email={email} /> */}
        </>
      )}
      {error && !tokenVerified && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
      {/* Decorative background image */}
      <Img src={Images.SignUpBg} alt="signupbg" />
    </VerifyWrapper>
  );
};

export default SignupVerify;
