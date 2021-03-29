import './index.css';
import Main from './containers/Main';
import { GlobalContextProvider } from './context/GlobalState'

function App() {
  return (
    <div className="App">
      <GlobalContextProvider> 
        <Main />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
