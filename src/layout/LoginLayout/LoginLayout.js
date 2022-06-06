import './LoginLayout.css'
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LoginLayout = () =>{
    return (
        <div className = "login-layout">
            <img src='/images/Logo-alta.png' alt = "logo-alta" id = "logo-alta-login"/>
            <div className = "login-layout__banner">
                
            </div> 
            <Outlet/>
        </div>
    )
}

export default LoginLayout;