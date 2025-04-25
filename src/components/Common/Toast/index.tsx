import { Toaster } from "react-hot-toast";

/*
 * Toast component
 * @returns {JSX.Element} - A toast notification component that displays messages to the user.
 */
const Toast = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
      }}
    />
  );
};

export default Toast;
