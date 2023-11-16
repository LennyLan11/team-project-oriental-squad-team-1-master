import React, {useState} from 'react'
import "./BookingPage.css"
import PosterCard from '../../components/PosterCard/PosterCard';

import LocationButton from '../../components/LocationButton/LocationButton';
import DateButton from '../../components/DateButton/DateButton';
import TimeButton from '../../components/TimeButton/TimeButton';
import Button from '../../components/Button/Button';


const BookingPage = ({movie}) => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);


    // For selected buttons in the UI 
    const locations = ['San Jose', 'San Francisco', 'New York', 'Boston']
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const dates = [{date: '1 May', day: 'Tue'},{date: '2 May', day: 'Wed'},{date: '3 May', day: 'Thu'},{date: '4 May', day: 'Fri'},{date: '5 May', day: 'Sat'}]
    const handleDatesClick = (date) => {
        setSelectedDate(date.date);
    };  

    const times = ["15:40", "17:20", "20:40", "21:00"]
    const handleTimeClick = (time) => {
        setSelectedTime(time)
    }


    return (
    <div className="booking-page">
        <div className='booking-page-content'>
            <div className="left-side">
                {/* City name boxes */}
                <div className="section">
                    <h2>Theater</h2>
                    <div className="city-boxes">
                        {locations.map((location) => {
                            return(
                                <div key={location} onClick={() => handleLocationClick(location)}>
                                    <LocationButton location={location} selected={selectedLocation === location}/>
                                </div>
                            )
                            
                        })}
                    </div>
                </div>

                {/* Date options */}
                <div className="section">
                    <h2>Date</h2>
                    <div className="date-boxes">
                    {dates.map((date) => {
                        return (
                            <div key={date.date} onClick={() => handleDatesClick(date)}>
                                <DateButton date={date} selected={selectedDate === date.date}/>
                            </div>      
                        )
                    })}
                    </div>
                </div>

                {/* Time options */}
                <div className="section">
                        <h2>Time</h2>
                        <div className="time-boxes">
                        {times.map((time) => {
                            return (
                                <div key={time} className="time-box" onClick={() => handleTimeClick(time)}>
                                    <TimeButton time={time} selected={selectedTime === time} />
                                </div>
                            )
                        })}
                        </div>
                </div>
            </div>
            
            <div className="right-side">
                <PosterCard movie={movie}/>
            </div>
        </div>
        
        <Button text={'Proceed'}/>
    </div>
  )
}

export default BookingPage;
