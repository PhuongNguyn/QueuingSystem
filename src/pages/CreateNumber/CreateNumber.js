import './CreateNumber.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateCard from './CreateCard'
import { openCreateNumber } from '../../redux/action/Number'
import { useDispatch } from 'react-redux'


const CreateNumber = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [optionBox, setOptionBox] = useState(false)
    const [option, setOption] = useState('')
    return (
        <div className = "create-number page-css">
            <h1 className = "page--title">Quản lý cấp số</h1>
            <div className = "create-number__box page-box">
                <h1 className = 'create-number__box--title'>Cấp số mới</h1>
                <p className = "create-number__box--choose">Dịch vụ khách hàng lựa chọn</p>
                <div className = "create-number-box__option-box" onClick = {()=>setOptionBox(!optionBox)}>
                    <p>Chọn dịch vụ</p>
                    {!optionBox && <AiFillCaretDown size = {20} style = {{color: '#FF7506'}}/>}
                    {optionBox && <AiFillCaretUp size = {20} style = {{color: '#FF7506'}}/>}
                    {optionBox && <div className='create-number-box__option-box--option'>
                        <ul>
                            <li>Khám mắt</li>
                            <li>Khám sản - Phụ khoa</li>
                            <li>Khám tai mũi họng</li>
                            <li>Khám tim</li>
                            <li>Khám răng hàm mặt</li>
                        </ul>
                    </div>}
                    {optionBox && <div className = "create-number__box--scrollbar">
                        
                    </div>}
                </div>
                <div className = "create-option-box__button">
                    <div className = "create-option-box__button-close" onClick = {()=>navigate('/number/listNumber')}>
                        <span>Huỷ bỏ</span>
                    </div>
                    <div className = "create-option-box__button-save" onClick = {()=>dispatch(openCreateNumber())}>
                        <span>In số</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNumber