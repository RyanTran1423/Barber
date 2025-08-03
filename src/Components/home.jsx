import Navbar from "./Navbar";
import { useState } from "react";

function Home(){
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currDate = new Date();
    const [currMonth, setCurrMonth] = useState(currDate.getMonth());
    const [currYear, setCurrYear] = useState(currDate.getFullYear());
    
    const daysInMonth = new Date(currYear, currMonth+1, 0).getDate();
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();

    const prevMonth = () => {
        setCurrMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth-1))
        setCurrYear((prevYear) => currMonth === 0 ? prevYear - 1 : prevYear)
    }
    const nextMonth = () => {
        setCurrMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth+1))
        setCurrYear((prevYear) => currMonth === 11 ? prevYear+1 : prevYear)
    }

    return(

        <div>
            <Navbar/>
            <div className="container">
                <div className="calendar-app">
                <div className="calendar">
                    <h1 className="heading">Scheduler</h1>
                    <div className="navigate-date">
                        <h2 className="month">{monthsOfYear[currMonth]}</h2>
                        <h2 className="year">{currYear}</h2>
                        <div className="buttons">
                            <i className="bx bx-chevron-left" onClick={prevMonth}></i>
                            <i className="bx bx-chevron-right" onClick={nextMonth}></i>
                        </div>
                    </div>
                    <div className="weekdays">
                        {daysOfWeek.map((day) => <span key={day}>{day}</span>)}
                    </div>
                    <div className="days">
                        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                        <span key = {`empty-${index}`}/>))}
                        {[...Array(daysInMonth).keys()].map((day) => 
                        <span key = {day+1} className={day + 1 === currDate.getDate() && 
                        currMonth === currDate.getMonth() && currYear === currDate.getFullYear() ? 
                        'current-day' : ''}>{day+1} </span>)}
                    </div>
                </div>
                <div className="events">
                    
                    <div className="event-popup">
                        Book Appointment
                        <div className="name-input">
                        <input type="text" className="name" placeholder = "First Name"/>
                        <input type="text" className="name" placeholder =  "Last Name"/>
                        <input type="text" className="Email" placeholder =  "Email"/>
                        </div>
                        <button className="event-popup-btn">Schedule Time Slot</button>
                        <button className="close-btn">
                            <i className="bx bx-x"></i>
                        </button>
                    </div>
                    <div className="event">
                        <div className="event-date-wrapper">
                            <div className="event-date">August 1, 2025</div>
                            <div className="event-time">3:00-3:30</div>
                        </div>
                        <div className="event-text">Standard Haircut</div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Home;