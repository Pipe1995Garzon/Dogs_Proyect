import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import RegisFundationPage from './pages/regisfundation';
import ListPetsPage from './pages/listpets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/regisfundation" element={<RegisFundationPage/>}/>
        <Route path="/listpets" element={<ListPetsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
