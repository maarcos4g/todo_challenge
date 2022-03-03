import { DefaultTheme, ThemeProvider } from 'styled-components'

import { usePersistedState } from '../../hooks/usePersistedState';

import { Header } from '../../components/Header';
import { Container } from './styles';

import light from '../../styles/theme/light';
import dark from '../../styles/theme/dark'

export function Home() {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    function toggleTheme () {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header onClick={toggleTheme} />
            </Container>
        </ThemeProvider>
    );
}