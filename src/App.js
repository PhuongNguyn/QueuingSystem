import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginLayout from './layout/LoginLayout/LoginLayout';
import Login from './pages/Login/Login';
import DashBoard from './pages/Dashboard/DashBoard';
import ForgotPassword from './pages/ForgotPassWord/ForgotPassword';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path = "/login" element = {<LoginLayout/>}>
              <Route index element = {<Login/>}/>
              <Route path = "/login/forgotPassword" element = {<ForgotPassword/>}/>
            </Route>
            <Route path = "/">
              <Route index element = {<DashBoard/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
