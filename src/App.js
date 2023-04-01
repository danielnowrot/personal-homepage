import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PersonalInfo from './features/PersonalInfo';
import Portfolio from "./features/Portfolio";
import { selectMode } from './features/PersonalInfo/themeSwitchSlice';
import { GlobalStyle } from './general/GlobalStyle';
import { themeDark, themeLight } from './general/theme';
import PageFooter from './general/PageFooter';

function App() {
  const darkModeOff = useSelector(selectMode);

  return (
    <ThemeProvider theme={darkModeOff ? themeLight : themeDark}>
      <GlobalStyle />
      <PersonalInfo />
      <Portfolio />
      <PageFooter />
    </ThemeProvider>
  );
}

export default App;
