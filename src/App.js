import Menu from './Components/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Menu/>
    <ToastContainer toastStyle={{backgroundColor: 'black'}}/>
    </>
  );
}

export default App;
