import React, { Suspense, lazy, useState } from 'react';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import useTheme from './hooks/useTheme';

const TeamPage = lazy(() => import('./pages/team/TeamPage'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const Wow = lazy(() => import('./pages/wow/Wow'));

function App() {
    const [mode, setMode] = useState('light');
    const { theme } = useTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Suspense fallback={<CircularProgress />}>
                    <CssBaseline />

                    <Routes>
                        <Route path='/' element={<HomePage setMode={setMode} mode={mode} />} />
                        <Route path='about' element={<AboutPage setMode={setMode} mode={mode} />} />
                        <Route path='team' element={<TeamPage setMode={setMode} mode={mode} />} />
                        <Route
                            path='contact'
                            element={<ContactPage setMode={setMode} mode={mode} />}
                        />
                        <Route path='*' element={<Wow />} />
                    </Routes>
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
