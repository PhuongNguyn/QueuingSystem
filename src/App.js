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
import Number from './pages/Number/Number';
import CreateNumber from './pages/CreateNumber/CreateNumber';
import CreateCard from './pages/CreateNumber/CreateCard';
import { useSelector } from 'react-redux'
import NumberDetail from './pages/NumberDetail/NumberDetail';
import Report from './pages/Report/Report';
import Role from './pages/Role/Role';
import CreateRole from './pages/CreateRole/CreateRole';
import EditRole from './pages/EditRole/EditRole';
import ManageAccount from './pages/ManageAccount/ManageAccount';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import EditAccount from './pages/EditAccount/EditAccount';
import UserDiary from './pages/UserDiary/UserDiary';


function App() {
  const createNumberCard = useSelector((state) =>state.number.createNumberCard)
  return (
    <div className="App">
        {createNumberCard && <CreateCard/>}
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
              <Route path = "/number/listNumber" element = {<Number/>}/>
              <Route path = "/number/listNumber/createNumber" element = {<CreateNumber/>}/>
              <Route path = "/number/listNumber/numberDetail" element = {<NumberDetail/>}/>
              <Route path = '/report/listReport' element = {<Report/>}/>
              <Route path = '/setting/listRole' element = {<Role/>}/>
              <Route path = '/setting/listRole/createRole' element = {<CreateRole/>}/>
              <Route path = '/setting/listRole/editRole' element = {<EditRole/>}/>
              <Route path = '/setting/listAccount' element = {<ManageAccount/>}/>
              <Route path = '/setting/listAccount/createAccount' element = {<CreateAccount/>}/>
              <Route path = '/setting/listAccount/editAccount' element = {<EditAccount/>}/>
              <Route path = '/setting/userDiary' element = {<UserDiary/>}/>
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
