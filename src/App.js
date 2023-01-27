import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Acess from './pages/Access';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact /> } />        
      </Routes>

      <Routes>
        <Route path='/acess' element={ <Acess /> }/>
        <Route /> 
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
