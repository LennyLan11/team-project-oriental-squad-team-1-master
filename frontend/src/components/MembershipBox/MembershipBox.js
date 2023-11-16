import React from 'react'
import "./MembershipBox.css"
import Button from '../Button/Button';

const MembershipBox = ({text}) => {
  return (
    <div className='membership-box'>
      <p>{text}</p>
      <div className='membership-box-btn'>
        {text === 'Regular' ? <Button text={'Free'} /> :  <Button text={'Get Premium'}/>}
      </div>
    </div>
  )
}

export default MembershipBox;
