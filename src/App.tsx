import Toast  from './components/ToastMenssenger';
import RoutesApp from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
      <Toast />
    </>
  );
}

export default App;
