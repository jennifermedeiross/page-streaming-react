import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Contact from 'pages/Contact';
import Access from 'pages/Access';
import Register from 'pages/Register';
import Catalog from 'pages/Catalog';
import Search from 'pages/Search';
import Reproduce from 'pages/Reproduce';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact /> } />        
        <Route path='/access' element={ <Access /> }/>
        <Route path='/register' element={ <Register />}/> 
        <Route path='/movies' element={<Catalog />}/>
        <Route path='/search' element={ <Search />}/>
        <Route path='/reproduce' element={ <Reproduce />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
