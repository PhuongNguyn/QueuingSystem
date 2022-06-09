import './Equipment.css'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { BsDot, BsFillPlusSquareFill } from 'react-icons/bs'


const Equipment = () => {
    const [activeStatus, setActiveStatus] = useState(false)
    const [connectStatus, setConnectStatus] = useState(false)
    const [activeStatusType, setActiveStatusType] = useState('all')
    const [connectStatusType, setConnectStatusType] = useState('all')
    const activeStatusName = {
        'all': 'Tất cả',
        'active': 'Hoạt động',
        'notactive': 'Ngưng hoạt động',
    }

    const connectStatusName = {
        'all': 'Tất cả',
        'active': 'Kết nối',
        'notactive': 'Mất kết nối',
    }
    const data = [
        {
            id: 1,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 2,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 3,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 4,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 5,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 6,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 7,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 8,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        },
        {
            id: 9,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng'
        }
    ]
    return (
        <div className = "equipment">
            <h1 className = "equipment--title">Danh sách thiết bị</h1>
            <div className = "equipment__select-input">
                <div className = "equipment-select-input__status">
                    <div className = "equipment-select-input-status__active-status">
                        <p>Trạng thái hoạt động</p>
                        <div className = "equipment-select-input-status-active-status__input" onClick = {()=>setActiveStatus(!activeStatus)}>
                            <span>{`${activeStatusName[activeStatusType]}`}</span>
                            {!activeStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                            {activeStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        </div>
                        {activeStatus && <div className = "active-status__option">
                            <ul>
                                    <li onClick = {()=>setActiveStatusType('all')}>
                                        <span>Tất cả</span>
                                    </li>
                                    <li onClick = {()=>setActiveStatusType('active')}>
                                        <span>Hoạt động</span>
                                    </li>
                                    <li onClick = {()=>setActiveStatusType('notactive')}>
                                        <span>Ngưng hoạt động</span>
                                    </li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div className = "equipment-select-input-status__connect-status">
                        <p>Trạng thái kết nối</p>
                        <div className = "equipment-select-input-status-connect-status__input" onClick = {()=>setConnectStatus(!connectStatus)}>
                            <span>{`${connectStatusName[connectStatusType]}`}</span>
                            {!connectStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                            {connectStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        </div>
                        {connectStatus && <div className = "connect-status__option">
                            <ul>
                                <li onClick = {()=>setConnectStatusType('all')}>
                                    <span>Tất cả</span>
                                </li>
                                <li onClick = {()=>setConnectStatusType('active')}>
                                    <span>Kết nối</span>
                                </li>
                                <li onClick = {()=>setConnectStatusType('notactive')}>
                                    <span>Mất kết nối</span>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = "equipment-select-input__keyword">
                    <p>Từ khoá</p>
                    <div className = "equipment-select-input-keyword__input">
                        <input type = "text" placeholder='Nhập từ khoá'/>
                        <FiSearch size={22} className='equipment-select-input-keyword__input--icon'/>
                    </div>
                </div>
            </div>
            <div className = "equipment__table">
                <div className = "list-table">
                    <table>
                        <tr>
                            <td width={104}>Mã thiết bị</td>
                            <td width={100}>Tên thiết bị</td>
                            <td width={139}>Địa chỉ IP</td>
                            <td width={172}>Trạng thái hoạt động</td>
                            <td width={145}>Trạng thái kết nối</td>
                            <td width={268}>Dịch vụ sử dụng</td>
                            <td width={82}></td>
                            <td width={106}></td>
                        </tr>
                        {data.map(item => 
                            <tr>
                                <td width={104}>{item.code}</td>
                                <td width={100}>{item.name}</td>
                                <td width={139}>{item.address}</td>
                                <td  width={172}><BsDot size = {25} style = {!item.activeStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}}/>{item.activeStatus ? 'Hoạt động' : 'Ngưng hoạt động'}</td>
                                <td width={145}><BsDot style = {!item.connectStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}} size = {25}/>{item.connectStatus ? 'Kết nối': 'Mất kết nối'}</td>
                                <td width={268}>
                                    <p className = "equipment-table--service">{item.service}</p>
                                    <p className = "equipment-table--readmore">Xem thêm</p>
                                </td>
                                <td width={82}><span className = "equiment-table--detail">Chi tiết</span></td>
                                <td width={106}><span  className = "equiment-table--update">Cập nhật</span></td>
                            </tr>    
                        )} 
                    </table>
                </div>
            </div>
            <div className = "equipment__create">
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm thiết bị</p>
            </div>
        </div>
    )
}

export default Equipment
