import React,{useState, useEffect, useRef} from 'react';
import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar';
import getMovies from '../../utility/getMovies';
import PosterCard from '../../components/PosterCard/PosterCard';
import Button from '../../components/Button/Button';
import MembershipBox from '../../components/MembershipBox/MembershipBox';
import BookingPage from '../BookingPage/BookingPage';
import SeatBookingPage from '../SeatBookingPage/SeatBookingPage';


const LandingPage = () => {
  
  
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([])
  
  const bookingPageRef = useRef();




  const handlePosterCardClick = (movie) => {

    setSelectedMovie(movie);

    // Scroll to the bookingPage section with an offset
    if (bookingPageRef.current) {
      const offset = -600; // Adjust the offset as needed
      const targetPosition = bookingPageRef.current.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    
  }

  useEffect(() => {
    // Fetch movies when the component mounts
    getMovies()
      .then((data) => {
        setMovies(data.slice(0,8));
        setSelectedMovie(data[0]);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <div className='title-1'>
        <h1>Now Showing</h1>
      </div>
      <div className='movies'>
        <div className="movie-tiles">
            {movies.map((movie) => {
                  return (
                    <div key={movie._id} ref={bookingPageRef} onClick={() => handlePosterCardClick(movie)}>
                        <PosterCard movie={movie}  />
                    </div>
                  ) 
            })}
        </div>
      </div>
      <div className='proceed-btn'>
        <Button text={'Proceed'}/>
      </div>
      <BookingPage movie={selectedMovie} />
      <div className='title-2'>
        <h1>Upcoming Movies</h1>
      </div>
    {/* Need to change this part to Upcoming Movies Api */}
      <div className='movies'>
        <div className="movie-tiles">
            {movies.map((movie) => {
                  return(
                    <div key={movie._id}>
                      <PosterCard movie={movie}/>
                    </div>
                  )
            })}
        </div>
      </div>
      <div className='title-2'>
        <h1>Membership Options</h1>
      </div>

      
      <div className='membership'>
        <MembershipBox text="Regular"/>
        <MembershipBox text="Premium"/>
      </div>

    </div>
  );
}

export default LandingPage;
