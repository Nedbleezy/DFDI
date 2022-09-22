import { createTheme } from '@mui/material/styles';

const useTheme = (mode) => {
    const theme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#40c087',
                dark: '#748b57',
                light: '#dab793',
            },
            secondary: {
                main: '#748b57',
            },
            custom: {
                main: '#dab793',
            },
        },
    });

    return { theme, mode };
};

export default useTheme;
