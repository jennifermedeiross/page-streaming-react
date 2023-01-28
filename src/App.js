import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Access from './pages/Access';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact /> } />        
      </Routes>

      <Routes>
        <Route path='/access' element={ <Access /> }/>
        <Route path='/register' element={ <Register />}/> 
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
