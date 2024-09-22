
import { Route, Routes } from 'react-router-dom';
import './App.css';


import { NavBarContextProvider} from "./context/NavBarContext"
import { ProgFullContextProvider } from './context/ProgFullContext';
import { ProgFullDataContextProvider } from './context/ProgFullDataContext';
import MainPage from './page/MainPage';

import BlogsPage from "./page/BlogsPage"
import ArticlePage from "./page/ArticlePage"



function App() {
  
  return (
    <ProgFullDataContextProvider>
    <ProgFullContextProvider>
    <NavBarContextProvider>
    <div className="App" >
      
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/blogs' element={ <BlogsPage/> } />
        <Route path='/article' element={ <ArticlePage/> } />
      </Routes>
    
      
    </div>
    </NavBarContextProvider>
    </ProgFullContextProvider>
    </ProgFullDataContextProvider>
  );
}

export default App;
