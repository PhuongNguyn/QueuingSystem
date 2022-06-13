import './ServiceDetail.css'
import {HiPencil} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

const ServiceDetail = () =>{
    const navigate = useNavigate()
    const [statusOption, setStatusOption] = useState('all')
    const [toggleStatusOption, setToggleStatusOption] = useState(false)
    const [timeFrom, setTimeFrom] = useState('1/1/2022')
    const [timeTo, setTimeTo] = useState('1/1/2022')
    const [toggleTimeFrom , setToggleTimeFrom] = useState(false)
    const [toggleTimeTo , setToggleTimeTo] = useState(false)


    const statusOptionName = {
        'all': 'Tất cả',
        'complete': 'Đã hoàn thành',
        'made': 'Đã thực hiện',
        'absent': 'Vắng'
    }

    const handleToggleCalendarFrom = () =>{
        setToggleTimeFrom(!toggleTimeFrom)
    }

    const handleToggleCalendarTo = () =>{
        setToggleTimeTo(!toggleTimeTo)
    }
    return (
        <div className = "service-detail page-css">
            <h1 className = "page--title">Quản lí dịch vụ</h1>
            <div className='service-detail__box'>
                <div className = "service-detail-box__information">
                    <h1 className = "box--title">Thông tin dịch vụ</h1>
                    <div className = "service-detail-box__information--content">
                        <p>Mã dịch vụ: <span style = {{marginLeft: '27px'}}>201</span></p>
                        <p>Tên dịch vụ: <span style = {{marginLeft: '22px'}}>Khám tim mạch</span></p>
                        <p>Mô tả: <span style = {{marginLeft: '64px'}}>Chuyên các bệnh lý về tim</span></p>
                    </div>
                    <h1 className = "service-detail__box--title-number box--title">Quy tắc cấp số</h1>
                    <div className = "service-detail-number-rule__input">
                        <div className='service-detail-number-rule__input--from-to'>
                            <p>Tăng tự động: <input type = "text" value={'0001'}/> đến <input type = "text" value={'9999'}/></p>
                        </div>
                        <div className='service-detail-number-rule__input--prefix'>
                            <p>Prefix: <input type = "text" style = {{marginLeft: '68px'}} value={'0001'}/></p>
                        </div>
                        <div className='service-detail-number-rule__input--reset'>
                            <p>Reset mỗi ngày</p>
                        </div>
                        <p className = "service-detail-number-rule__input--example">Ví dụ 201-2001</p>
                    </div>
                </div>
                <div className = "service-detail-box__table">
                    <div className = "service-detail-box-table__input">
                        <div className = "service-detail-box-table__input--status">
                            <p>Trạng thái</p>
                            <div className = "service-detail-box-table__input-status--option">
                                <p>Tất cả</p>
                                {!toggleStatusOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                                {toggleStatusOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                            </div>
                        </div>
                        <div className = "service-detail-box-table__input--from">
                            <p className = "service-detail-box-table__input--from--title">Chọn thời gian</p>
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
                            </div>
                        </div>
                        <div className = "service-detail-box-table__input--keyword">
                            <p className = "service-input__keyword--title">Từ khoá</p>
                            <input type = "text" placeholder='Nhập từ khoá' />
                            <BiSearch size = {22} className = "service-detail-box-table__input--keyword-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "service__edit" onClick = {()=>navigate('/service/listService/editService')}>
                    <HiPencil size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                    <p>Cập nhật danh sách</p>
            </div>
            <div className = "service__back" onClick = {()=>navigate('/service/listService/editService')}>
                    <TbArrowBackUp size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                    <p>Trở lại</p>
            </div>
        </div>
        
    )
}

export default ServiceDetail