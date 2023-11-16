import React, { useState, useEffect } from 'react';
import './SeatBookingPage.css'; // Import your CSS file for styling
import Button from '../../components/Button/Button';
import convertSeatToString from '../../utility/convertSeatToString'

const SeatBookingPage = () => {
  
  
    const rows = 7;
  const seatsPerRow = 10;
//   const initialSeats = Array.from({ length: rows }, () =>
//     Array(seatsPerRow).fill(true)
// );

// Initialize seat availability state
const [seatAvailability, setSeatAvailability] = useState([]);
const [selectedSeats, setSelectedSeats] = useState([]);

const initialSeats = [
[{ status: 'available' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' },],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' } ],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' } ],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' } ],
[{ status: 'available' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'unavailable' } ],
[{ status: 'available' },{ status: 'unavailable' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'unavailable' },{ status: 'available' },{ status: 'available' },{ status: 'available' } ],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' } ],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' } ],
[{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' },{ status: 'available' } ],
]


    useEffect(() => {
      setSeatAvailability(initialSeats)
    }, [])
    
  
//   // Function to toggle seat availability
//   const toggleSeat = (rowIndex, seatIndex) => {
//     setSeatAvailability((seatAvailability) => {
//       console.log(seatAvailability)
//       const updatedSeats = [...seatAvailability];
//       updatedSeats[rowIndex][seatIndex] = !updatedSeats[rowIndex][seatIndex];
//       return updatedSeats;
//     });
//   };

    
    // Function to handle seat click
    const handleSeatClick = (rowIndex, seatIndex) => {
        // console.log(seatAvailability)
        const returnUpdatedSeats = () => {
            const updatedSeats = [...seatAvailability];
            if (selectedSeats.length < 8 || updatedSeats[rowIndex][seatIndex].status === 'selected'){
                if (updatedSeats[rowIndex][seatIndex].status === 'available' || seatAvailability[rowIndex][seatIndex].status === 'selected'){
                    updatedSeats[rowIndex][seatIndex].status =
                    updatedSeats[rowIndex][seatIndex].status === 'selected'
                    ? 'available'
                    : 'selected';

                    const newFunc = () => {
                        const removeFromSelectedSeats = selectedSeats.some(
                            (seat) => seat.rowIndex === rowIndex && seat.seatIndex === seatIndex
                        );
                        if (removeFromSelectedSeats) {
                            return selectedSeats.filter(
                                (seat) => !(seat.rowIndex === rowIndex && seat.seatIndex === seatIndex)
                            );
                        }
                        else {
                            return [...selectedSeats,{rowIndex, seatIndex}]
                        }
                    }
                    
                    
                    setSelectedSeats(newFunc());
                }
                else {
                    window.alert("This seat is already booked, sorry try a different one!")
                }
            } else {
                window.alert("You can't select more than 8 seats.")
            }

            return updatedSeats;
        }



        setSeatAvailability(returnUpdatedSeats())
    };
  

  // Calculate the total number of available seats
//   const totalAvailableSeats = seatAvailability.reduce(
//     (total, row) => total + row.filter((seat) => seat).length,
//     0
//   );

  return (
    <div className="seat-booking-container">
        <div className='seat-booking-title'>
            <h2>Select Seat</h2>
        </div>
      
        {/* <p>Total Available Seats: {totalAvailableSeats}</p> */}
        <div className="seat-grid">
            {seatAvailability.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
                {row.map((isAvailable, seatIndex) => (
                <div
                    key={seatIndex}
                    className={`seat ${isAvailable.status === 'available' ? 'available' : isAvailable.status === 'selected' ? 'selected' : 'unavailable'}`}
                    onClick={() => handleSeatClick(rowIndex, seatIndex)}
                >
                    {convertSeatToString({rowIndex,seatIndex})}
                </div>
                ))}
            </div>
            ))}
            <div className='screen'>
                <p>SCREEN</p>
            </div>
        </div>

        <div className='seat-booking-footer'>
            <div className='total-amount-container'>
                <div>
                    Total Amount: 
                </div>
                {/* Change 15 to the price amount of the ticket */}
                <div className='amount'>
                    {'$'}{15*selectedSeats.length}
                </div>
            </div>
            <div className='seat-numbers-container'>
                <div >
                    Seat Numbers: 
                </div>
                <div className='seat-numbers'>
                    {selectedSeats.map((seat,idx) => {
                        return(
                            <p key={idx}>
                                {convertSeatToString(seat)}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className='seat-booking-btns'>
                <Button text={'Back'} />
                <Button text={'Proceed to Payment'} />
            </div>
        </div>
    </div>
  );
};

export default SeatBookingPage;
