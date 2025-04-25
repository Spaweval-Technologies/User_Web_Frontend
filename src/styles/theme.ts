/**
  * lightTheme and darkTheme objects
  * These objects define the light and dark themes for the application.
  * Each theme contains color properties, font weights, and breakpoints.
  * The colors object contains color properties for the theme.
  * The fontWeights object contains font weight properties for the theme.
  * The breakpoints object contains responsive design breakpoints for the theme.
*/
export const lightTheme = {
  colors: {
    primary: "#20AAFB",
    background: "#fff",
    text: "#000",
    textSecondary: "#fff",
    secondary: '#272728',
    greyLight: '#D9D9D9',
    contrastBg: '#000',
    grey: '#f2f7fa',
    transparent: 'transparent',
    greyBorder: '#EBEBEB',
    transparentGrey: 'rgba(255, 255, 255, 0.1)',
    transparentDark: 'rgba(0, 0, 0, 0.1)',
    blueGrey: '#D8D9E3',
    bluishGrey: '#9C9FB7',
    lightSilver: '#d9d9d9'
  },
  fontWeights: {
    lighter: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
    strong: 900
  },
  breakpoints: {
    vsm: '412px', //very small mobile
    sm: "640px", //mobile
    md: "768px", // tablet
    lg: "1024px", //laptop
    xl: "1280px", // desktop
    xxl: "1440px", // medium desktop
    xxxl: "2560px", // large desktop
  },
};

export const darkTheme = {
  colors: {
    primary: "#79ffe1",
    background: "#171717",
    text: "#fff",
    textSecondary: "#000",
    secondary: '#272728',
    greyLight: '#D9D9D9',
    contrastBg: '#fff',
    transparent: 'transparent',
    grey: '#f2f7fa',
    greyBorder: '#EBEBEB',
    transparentGrey: 'rgba(0, 0, 0, 0.1)',
    transparentDark: 'rgba(255, 255, 255, 0.1)',
    blueGrey: '#D8D9E3',
    bluishGrey: '#9C9FB7',
    lightSilver: '#d9d9d9'
  },
  fontWeights: {
    lighter: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
    strong: 900
  },
  breakpoints: {
    vsm: '412px', //very small mobile
    sm: "640px", //mobile
    md: "768px", // tablet
    lg: "1024px", //laptop
    xl: "1280px", // desktop
    xxl: "1440px", // medium desktop
    xxxl: "2560px", // large desktop
  },
};

export type ThemeType = typeof lightTheme;
export type Theme = keyof typeof lightTheme.colors;
export type ThemeKey = keyof typeof lightTheme;