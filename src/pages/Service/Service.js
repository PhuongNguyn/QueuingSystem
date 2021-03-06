import './Service.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {BsFillCaretRightFill} from 'react-icons/bs'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Calendar from 'react-calendar'
import {AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai'
import {BsDot, BsFillPlusSquareFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Service = () =>{
    const navigate = useNavigate()
    const [activeStatus, selectActiveStatus] = useState('all')
    const [toggleActiveStatus, setToggleActiveStatus] = useState(false)
    const [timeFrom, setTimeFrom] = useState('1/1/2022')
    const [timeTo, setTimeTo] = useState('1/1/2022')
    const [calendarFrom, setCalendarFrom] = useState(false)
    const [calendarTo, setCalendarTo] = useState(false)
    const activeStatusName = {
        'all': 'Tất cả',
        'active': 'Hoạt động',
        'notactive': 'Ngưng hoạt động',
    }
    const handleChangeValueFrom = (value)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo = (value) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleToggleCalendarFrom = () =>{
        setCalendarFrom(!calendarFrom)
    }
    const handleToggleCalendarTo = () =>{
        setCalendarTo(!calendarTo)
    }

    const data = [
        {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },
        {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },  {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        },
        {
            code: 'KIO_01',
            name: 'Kiosk',
            description: 'Hoạt động',
            status: 'true',
        }
    ]

    const handleDetailService = () =>{
        navigate('serviceDetail')
    }

    const handleEditService = () =>{
        navigate('editService')
    }
    return (
        <div className = "service page-css">
            <h1 className = "service--title page--title">Quản lí dịch vụ</h1>
            <div className = "service__input">
                <div className = "service-input__active-status">
                    <p>Trạng thái hoạt động</p>
                    <div className = "service-input-active-status__select" onClick = {()=>setToggleActiveStatus(!toggleActiveStatus)}>
                        <p>{`${activeStatusName[activeStatus]}`}</p>
                        {!toggleActiveStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        {toggleActiveStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                    </div>
                    {toggleActiveStatus && <div className = "service-input-active-status__option">
                        <ul>
                            <li onClick = {()=>selectActiveStatus('all')}>Tất cả</li>
                            <li onClick = {()=>selectActiveStatus('active')}>Hoạt động</li>
                            <li onClick = {()=>selectActiveStatus('notactive')}>Ngưng hoạt động</li>
                        </ul>
                    </div>}
                </div>
                <div className = "service-input__date">
                    <p className='service-input__date--title'>Chọn thời gian</p>
                    <div className = "service-input__date--wrapper">
                        <div className = "service-input-date__from" onClick = {()=>handleToggleCalendarFrom()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '3px'}}/>
                            <p>{`${timeFrom}`}</p>
                        </div>
                        <BsFillCaretRightFill size = {10} style = {{color: 'black', marginLeft: '6px', marginRight: '6px'}}/>
                        <div className = "service-input-date__to" onClick = {()=>handleToggleCalendarTo()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506'}}/>
                            <p>{`${timeTo}`}</p>
                        </div>
                        {calendarFrom && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value)=>handleChangeValueFrom(value)}
                            />
                        </div>}
                        {calendarTo && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value)=>handleChangeValueTo(value)}
                            />
                        </div>}
                    </div>
                </div>
                <div className = "service-input__keyword">
                    <p className = "service-input__keyword--title">Từ khoá</p>
                    <input type = "text" placeholder='Nhập từ khoá' />
                    <BiSearch size = {20} className = "service-input__keyword--search-icon"/>
                </div>
            </div>
            <div className = "serviec-table">
                <div className = "list-table">
                    <table>
                        <tr>
                            <td width={150}>Mã dịch vụ</td>
                            <td width={226}>Tên dịch vụ</td>
                            <td width={232}>Mô tả</td>
                            <td width={255}>Trạng thái hoạt động</td>
                            <td width={127}></td>
                            <td width={140}></td>
                        </tr>
                        {
                            data.map((item) => 
                                <tr>
                                    <td width={150}>{item.code}</td>
                                    <td width={226}>{item.name}</td>
                                    <td width={232}>{item.description}</td>
                                    <td width={255}><BsDot style = {!item.status ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-10px'}} size = {30}/>{item.status ? 'Hoạt động': 'Ngưng hoạt động'}</td>
                                    <td width={82}><span onClick = {()=>{handleDetailService()}} className = "equiment-table--detail">Chi tiết</span></td>
                                    <td width={106}><span onClick = {()=>{handleEditService()}} className = "equiment-table--update">Cập nhật</span></td>
                                </tr>
                            )
                        }
                    </table>
                </div>
                <div className = "dividePage">
                    <ul>
                        <li><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        <li style = {{backgroundColor: '#FF7506', color: 'white'}}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>...</li>
                        <li>10</li>
                        <li><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
                    </ul>
                </div>
            </div>
            <div className = "equipment__create" onClick = {()=>navigate('createService')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm dịch vụ</p>
            </div>
        </div>
    )
}

export default Service