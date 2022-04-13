import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import RegisFundationPage from './pages/regisfundation';
import ListPetsPage from './pages/listpets';
import DogImageCustodyPage from './pages/custodydogspictures';
import AuthProvider from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/regisfundation" element={<RegisFundationPage/>}/>
          <Route path="/listpets" element={<ListPetsPage/>}/>
          <Route path="/admiimagesdogscustody" element={<DogImageCustodyPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
