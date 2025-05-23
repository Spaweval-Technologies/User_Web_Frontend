"use client";
import React, { ReactNode, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/theme";

/*
  * ThemeProvider component
  * @param {ReactNode} children - The children components to be wrapped by the provider.
  * @returns {JSX.Element} - A theme provider component that wraps its children with a styled-components theme provider.
*/
const ThemeProvider = ({ children }: { children: ReactNode })  =>{
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <StyledProvider theme={isDark ? darkTheme : lightTheme} >
        {/* <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value={!isDark ? "light" : "dark"} onChange={toggleTheme} className="sr-only peer" checked={isDark} />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label> */}
      {children}
    </StyledProvider>
  );
}

export default ThemeProvider;