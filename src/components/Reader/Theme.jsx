// import { createContext, useContext, useState } from 'react';
// import { darkTheme, lightTheme } from './Reader.styled';

// const MyThemeContext = createContext();

// export const useTheme = () => useContext(MyThemeContext);

// export default function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState();

//   const dark = () => {
//     setTheme(darkTheme);
//     console.log(darkTheme);
//   };
//   console.log(dark);
//   const light = () => {
//     console.log(lightTheme);
//     setTheme(lightTheme);
//   };
//   console.log(lightTheme);

//   return (
//     <MyThemeContext.Provider value={{ theme, dark, light }}>
//       {children}
//     </MyThemeContext.Provider>
//   );
// }

// import React, { createContext, useContext, useMemo, useState } from 'react';
// // import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const ColorModeContext = createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === 'dark' ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   );
// }

// export default function ToggleColorMode() {
//   const [mode, setMode] = (useState < 'light') | ('dark' > 'light');
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [setMode]
//   );

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <MyApp />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
