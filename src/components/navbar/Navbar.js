import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {MdOutlineDashboard} from 'react-icons/md'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiOutlineComment} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FiLayers, FiLogOut} from 'react-icons/fi'
import {RiSettingsLine} from 'react-icons/ri'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Navbar = () =>{
    const navigate = useNavigate()
    const isLogin = true
    return (
        <div className = "navbar">
            <img className = "navbar--logo" src='/images/Logo-alta.png' alt = "logo-alta"/>
            <div className = "navbar__option">
                <ul>
                    {isLogin && <li><NavLink style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/"><MdOutlineDashboard size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/>  Dashboard</NavLink></li>}
                    {isLogin &&<li><NavLink style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/equipment/listEquipment"><HiOutlineDesktopComputer size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/>  Thiết bị</NavLink></li>}
                    {isLogin &&<li><NavLink style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/service/listService"><AiOutlineComment size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/> Dịch vụ</NavLink></li>}
                    <li><NavLink style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/number/listNumber"><FiLayers size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/>  Cấp số</NavLink></li>
                    {isLogin &&  <li><NavLink style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/report/listReport"><HiOutlineDocumentReport size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/>  Báo cáo</NavLink></li>}
                    {isLogin && <li ><NavLink className = "navbar__option--setting" onClick = {(e)=>{e.preventDefault()}}style = {({isActive})=>{if(isActive){return {backgroundColor: '#FF7506', color: 'white'}}}} to = "/setting">
                        <RiSettingsLine size = {24} style = {{verticalAlign: '-6px', marginRight: '5px'}}/> Cài đặt hệ thống <BsThreeDotsVertical style = {{verticalAlign: '-6px', marginLeft: '5px'}}/>
                    </NavLink>
                    <ul className = "setting-system-option">
                        <li>
                            <NavLink to = "/setting/listRole">Quản lý vai trò</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/setting/listAccount">Quản lý tài khoản</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/setting/userDiary">Nhật ký người dùng</NavLink>
                        </li>
                    </ul>
                    </li>}
                </ul>
            </div>
            {isLogin && <div className='navbar__button-logout' onClick = {()=>navigate('/login')}>
                <span><FiLogOut size = {20} style = {{verticalAlign: '-4px', marginRight: '6px'}}/> Đăng xuất</span>
            </div>}
        </div>
    )
}

export default Navbar