import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginLayout from './layout/LoginLayout/LoginLayout';
import Login from './pages/Login/Login';
import DashBoard from './pages/Dashboard/DashBoard';
import ForgotPassword from './pages/ForgotPassWord/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import MainLayout from './layout/MainLayout/MainLayout';
import Equipment from './pages/Equipment/Equipment';
import ManageRoles from './pages/ManageRoles/ManageRoles';
import UserInfo from './pages/UserInfo/UserInfo';
import CreateEquipment from './pages/CreateEquipment/CreateEquipment';
import EquipmentDetail from './pages/EquipmentDetail/EquipmentDetail';
import EditEquipment from './pages/EditEquipment/EditEquipment';
import Service from './pages/Service/Service';
import CreateService from './pages/CreateService/CreateService';
import EditService from './pages/EditService/EditService';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path = "/" element ={<MainLayout/>}>
              <Route index element = {<DashBoard/>}/>
              <Route path = "/equipment/listEquipment" element = {<Equipment/>}/>
              <Route path = "/equipment/listEquipment/createEquipment" element = {<CreateEquipment/>}/>
              <Route path = "/equipment/listEquipment/equipmentDetail" element = {<EquipmentDetail/>}/>
              <Route path = "/equipment/listEquipment/editEquipment" element = {<EditEquipment/>}/>
              <Route path = "/service/listService" element = {<Service/>}/>
              <Route path = "/service/listService/createService" element = {<CreateService/>}/>
              <Route path = "/service/listService/editService" element = {<EditService/>}/>
              <Route path = "/service/listService/serviceDetail" element = {<ServiceDetail/>}/>
              <Route path = "/setting/manageRoles" element = {<ManageRoles/>}/>
              <Route path = "/userInfo" element = {<UserInfo/>}/>
            </Route>
            <Route path = "/login" element = {<LoginLayout/>}>
              <Route index element = {<Login/>}/>
              <Route path = "/login/forgotPassword" element = {<ForgotPassword/>}/>
              <Route path = "/login/resetPassword" element = {<ResetPassword/>}/>
            </Route>  
        </Routes>
        </div>
  );
}

export default App;
