import './DashBoard.css'
import { BsCalendar, BsCalendarCheck, BsBookmarkStar } from 'react-icons/bs'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import {IoIosCall} from 'react-icons/io'

const DashBoard = () =>{
    return (
        <div className = "dash-board">
            <div className = "dash-board-wrapper">
                <div className = "dash-board-chart">
                    <h1 className = "dash-board-chart--title">Biểu đồ cấp số</h1>
                    <div className = "dash-board-chart__statistic">
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#e9efff'}}>
                                    <BsCalendar size = {25} style={{color:'#6493F9'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã cấp</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">4.221</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: 'rgba(255, 149, 1, 0.15)'}}><span style = {{color: '#FF9138'}}><AiOutlineArrowUp/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#e0f7e5'}}>
                                    <BsCalendarCheck size = {25} style={{color:'#35C75A'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã sử dụng</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">3.721</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: '#fbe2e2'}}><span style = {{color: '#E73F3F'}}><AiOutlineArrowUp/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#fff3e9'}}>
                                    <div className = "dash-board-chart-statistic-card__title--icon-wrapper">
                                        <FiUser size = {18} style = {{color: '#FFAC6A'}}/><IoIosCall style = {{color: '#FFAC6A', verticalAlign: '10px', marginLeft: '-7px'}}/>
                                    </div>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đang chờ</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">468</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: 'rgba(255, 149, 1, 0.15)'}}><span style = {{color: '#FF9138'}}><AiOutlineArrowDown/> 32,41%</span></div>
                            </div>
                        </div>
                        <div className='dash-board-chart-statistic__card'>
                            <div className ="dash-board-chart-statistic-card__title">
                                <div className ='dash-board-chart-satistic-card__title--icon' style = {{background: '#fee9e9'}}>
                                    <BsBookmarkStar size = {25} style={{color:'#F86D6D'}}/>
                                </div>
                                <h3 className = "dash-board-chart-satistic-card__title--title">Số thứ tự đã bỏ qua</h3>
                            </div>
                            <div className = "dash-board-chart-satistic-card__number">
                                <h1 className ="dash-board-chart-satistic-card__number--number">32</h1>
                                <div className = "dash-board-chart-satistic-card__number--percent" style = {{background: '#fbe2e2'}}><span style = {{color: '#E73F3F'}}><AiOutlineArrowDown/> 32,41%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dash-board-statistic'>
                    <h1 className = "dash-board-statistic--title">Tổng quan</h1>
                </div>
            </div>
        </div>
    )
}

export default DashBoard