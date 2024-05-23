import LoginPage from './components/LoginPage';
import RegForm from './components/RegForm';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import  Sticker from './components/sticker';
import { useLocalContext } from './context/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const { loggedInUser, admin } = useLocalContext();
  // <LoginPage/>
  // <RegForm/>
  // <AdminDashboard/>
  if (loggedInUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/form' element={<RegForm />} />
          <Route path='/sticker' element={<Sticker />} />

        </Routes>
      </BrowserRouter>)
  }
  else if (admin) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    )
  }
  else {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
        </Routes>
      </BrowserRouter>)
  }
}

export default App;
