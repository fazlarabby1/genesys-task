import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Toaster
        position="top-center"
      />
      <h1>Hello Man</h1>
      <Home />
    </div>
  );
}

export default App;
