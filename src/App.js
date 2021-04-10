import './index.css';
import Main from './containers/Main';
import { GlobalContextProvider } from './context/Global'
import { ThemeContextProvider } from './context/Theme'

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <GlobalContextProvider>
          <Main />
        </GlobalContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
