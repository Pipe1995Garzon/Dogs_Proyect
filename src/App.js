import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import RegisFundationPage from './pages/regisfundation';
import ListPetsPage from './pages/listpets';
import DogImageCustodyPage from './pages/custodydogspictures';
import RecoveryPasswordPage from './pages/recoverypassword';
import {ProtectedRoute}  from './components/ProtectedRoute';
import AdminDogs from './pages/admindogs';
import AddPetsHistoryPage from './pages/addhistorypage';
import ManageAllPetsHistory from './pages/managepetshistory';
import  AuthProvider  from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/regisfundation" element={<RegisFundationPage/>}/>
          <Route path="/listpets" element={<ListPetsPage/>}/>
          <Route path="/recoverypassword" element={<RecoveryPasswordPage/>}/>
          <Route
              path="/admiimagesdogscustody"
              element={
                <ProtectedRoute>
                  <DogImageCustodyPage/>
                </ProtectedRoute>
                }
                />
          <Route
            path="/administradorDogs"
            element={
              <ProtectedRoute>
                <AdminDogs/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/crearhistoriamascota"
            element={
              <ProtectedRoute>
                <AddPetsHistoryPage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/gestionarhistoriasmascotas"
            element={
              <ProtectedRoute>
                <ManageAllPetsHistory/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
