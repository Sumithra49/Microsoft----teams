import React from 'react';
import './dialer-item.css';

const DialerItem = ({item}) => {
   
  return (
    <div className='dialer-item'>
        
<img src={item.avatar} className='item-avatar' alt=''/>
<div className='item-info'>
    <label className='item-title'>{item.name}</label>
    <lable className='item-subtitle'>{item.type}</lable>
</div>
<div className='item-icons'>
    <div className='item-icon'>
        <i class='fi fi-rr-microphone'></i>
    </div>
    <div className='item-icon'>
        <i class='fi fi-rr-play-alt'></i>
    </div>
    

</div>
    </div>
  )
}

export default DialerItem