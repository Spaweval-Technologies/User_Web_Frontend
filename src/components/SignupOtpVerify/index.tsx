'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/store/hooks';
import { verifySignupOtp } from '@/redux/actions/authSlice';

//props
import SignupVerifyOtpProps from './index.d';

// CSS
import { FormContainer, Submit, Text, Title } from '../SignupForm/index.styles';
import { CodeInput, Input, Resend, SentCode, Timer } from './index.styles';

/**
 * SignupOtpVerify component renders the OTP verification screen
 * where users enter a 6-digit code sent to their registered mobile number.
 * @returns {JSX.Element} A React element displaying OTP input fields,
 * verification button, resend option, and a countdown timer.
 */
const SignupOtpVerify = ({ email, token }: SignupVerifyOtpProps) => {
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(120); // 2 minutes = 120 seconds
  const [canResend, setCanResend] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const formatTime = (seconds: number): string => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtpError(null);
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6 && email) {
      setOtpError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      // Dispatch the verifySignupOtp action with email and full OTP
      const response = await dispatch(verifySignupOtp({ email, otp: fullOtp }));

      if (response.payload?.error) {
        setOtpError(response.payload.error.message);
      } else if (response.meta?.requestStatus === 'fulfilled') {
        localStorage.setItem('signup_success', 'true');
        router.push('/login');
      }
    } catch (error) {
      setOtpError('Error verifying OTP');
    }
  };

  const handleResendOtp = () => {
    if (!canResend) return;
    // trigger resend logic here
    setTimer(120); // restart timer
    setCanResend(false);
  };

  return (
    <FormContainer>
      <Title>Please Enter the OTP</Title>
      {/* Masked mobile display */}
      <SentCode>
        We sent a code to<sup>********</sup>01
      </SentCode>
      {/* 6-digit OTP input fields */}
      <CodeInput>
        {otp.map((digit, index) => (
          <Input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </CodeInput>
      {/* Button to submit OTP */}
      <Submit onClick={handleSubmit}>Verify</Submit>
      {otpError && <div>{otpError}</div>}
      {/* Message and resend controls */}
      <Text>Don't get Code?</Text>
      <Timer>{formatTime(timer)}</Timer>
      <Resend onClick={handleResendOtp} disabled={!canResend}>
        Resend Code
      </Resend>
    </FormContainer>
  );
};

export default SignupOtpVerify;
