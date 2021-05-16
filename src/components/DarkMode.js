import React, { useState } from 'react';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => 
props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => 
props.theme.mode === 'dark' ? '#EEE' : '#111'};
}`;

const DarkMode = () => {
  // setter and getter (theme and setTheme)
    const [theme, setTheme] = useState({ mode: 'light' })
    return (
        <ThemeProvider theme={theme}>
            <>
            <GlobalStyle />
            <div className="dark">
                <button onClick={e=>
                setTheme(
                    theme.mode === 'dark'
                    ? {mode: 'light' }
                    :{ mode: 'dark' }
                )}
                >
                    Dark Mode

                </button>

            </div>
            </>
        </ThemeProvider>
    )
}

export default DarkMode;
