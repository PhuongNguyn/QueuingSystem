import './Report.css'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsDot, BsFillCaretRightFill } from 'react-icons/bs'
import {MdUnfoldMore} from 'react-icons/md'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {FaFileDownload} from 'react-icons/fa'
import { Checkbox } from '@mui/material'

const Report = () =>{
    const navigate = useNavigate()
    const [countOption, setCountOption] = useState(false)
    const [serviceOption, setServiceOption] = useState(false)
    const [grantTimeOption, setGrantTimeOption] = useState(false)
    const [statusOption, setStatusOption] = useState(false)
    const [sourceOption, setSourceOption] = useState(false)
    const [timeFrom, setTimeFrom] = useState('1/1/2022')
    const [timeTo, setTimeTo] = useState('1/1/2022')
    const [calendarFrom, setCalendarFrom] = useState(false)
    const [calendarTo, setCalendarTo] = useState(false)
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

    const serviceNameKey = {
        'all': 'Tất cả',
        'heart': 'Khám tim mạch',
    }

    const statusName = {
        'all': 'Tất cả',
        'waiting': 'Đang chờ',
        'used': 'Đã sử dụng',
        'skip': 'Bỏ qua',
    }

    const sourceName = {
        'all': 'Tất cả',
        'kiosk': 'Kiosk',
        'system': 'Hệ thống',
    }

    const data = [
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010001',
            service: 'heart',
            grantTime: '07:20 - 07/10/2021',
            status: 'waiting',
            source: 'kiosk',
        },
    ]
    return (
            <div className = 'report-page page-css'>
              <div className = "service-input__date report-page__input-date">
                    <p className='service-input__date--title'>Chọn thời gian</p>
                    <div className = "service-input__date--wrapper ">
                        <div className = "service-input-date__from report-page-input__date-from" onClick = {()=>handleToggleCalendarFrom()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '10px'}}/>
                            <p>{`${timeFrom}`}</p>
                        </div>
                        <BsFillCaretRightFill size = {10} style = {{color: 'black', marginLeft: '6px', marginRight: '6px'}}/>
                        <div className = "service-input-date__to report-page-input__date-to" onClick = {()=>handleToggleCalendarTo()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '8px'}}/>
                            <p>{`${timeTo}`}</p>
                        </div>
                        {calendarFrom && <div className = "service__calendar report-page-calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value)=>handleChangeValueFrom(value)}
                            />
                        </div>}
                        {calendarTo && <div className = "service__calendar report-page-calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value)=>handleChangeValueTo(value)}
                            />
                        </div>}
                    </div>
                </div>
                <div className = 'report-page__table'>
                    <div className = 'list-table report-page__list-table'>
                        <table>
                            <tr>
                                <td width={227}>
                                    <p>Số thứ tự<span><MdUnfoldMore onClick={()=>setCountOption(!countOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {countOption && <div className = 'report-page-list-table__count-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>2040001</li>
                                            <li>2040002</li>
                                            <li>2040003</li>
                                            <li>2040004</li>
                                            <li>2040005</li>
                                            <li>2040006</li>
                                        </ul>
                                    </div>}
                                    {countOption && <div className='report-page--option-scrollbar'>
                                        
                                    </div>}
                                </td>
                                <td width={234}>
                                    <p>Tên dịch vụ<span><MdUnfoldMore onClick = {()=>setServiceOption(!serviceOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {serviceOption && <div className = 'report-page-list-table__service-option'>
                                        <ul>
                                            <li><p><span>Tất cả</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám tim mạch</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám mắt</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám tổng quát</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám răng hàm mặt</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                        </ul>
                                    </div>}
                                    {serviceOption && <div className = 'report-page--option-scrollbar'></div>}
                                </td>
                                <td width={240}>
                                    <p>Thời gian cấp<span><MdUnfoldMore onClick = {()=>setGrantTimeOption(!grantTimeOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {grantTimeOption && <div className = 'report-page-list-table__grant-time-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>07:10 01/10/2021</li>
                                            <li>07:15 01/10/2021</li>
                                            <li>07:20 01/10/2021</li>
                                            <li>07:25 01/10/2021</li>
                                            <li>07:30 01/10/2021</li>
                                        </ul>
                                    </div>}
                                    {grantTimeOption && <div className = 'report-page--option-scrollbar'></div>}
                                </td>
                                <td width={218}>
                                    <p>Tình trạng<span><MdUnfoldMore onClick = {()=>setStatusOption(!statusOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {statusOption && <div className = 'report-page-list-table__status-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>Đang chờ</li>
                                            <li>Đã sử dụng</li>
                                            <li>Bỏ qua</li>
                                        </ul>
                                    </div>}
                                </td>
                                <td width={207}>
                                    <p>Nguồn cấp<span><MdUnfoldMore onClick = {()=>setSourceOption(!sourceOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {sourceOption && <div className = 'report-page-list-table__source-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>Kiosk</li>
                                            <li>Hệ thống</li>
                                        </ul>
                                    </div>}
                                </td>
                            </tr>
                            {data.map((item) => {
                                 let dotColor = '#4277FF'
                                 if(item.status == 'waiting')
                                     dotColor = '#4277FF'
                                 else if(item.status == 'used')
                                     dotColor = '#7E7D88'
                                 else if(item.status == 'skip')
                                     dotColor = '#E73F3F'
                                return (
                                    <tr>
                                        <td width={227}>{item.count}</td>
                                        <td width={234}>{`${serviceNameKey[item.service]}`}</td>
                                        <td width={240}>{item.grantTime}</td>
                                        <td width={218}><BsDot size = {30} style = {{color: dotColor, verticalAlign: '-10px'}}/>{`${statusName[item.status]}`}</td>
                                        <td width={207}>{`${sourceName[item.source]}`}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
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
                <div className = "equipment__create report__download">
                    <FaFileDownload size = {25} style = {{color: '#FF9138'}}/>
                    <p>Tải về</p>
                </div>
            </div>
    )
}

export default Report