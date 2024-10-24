import React from 'react'
import './contact-card.css';
const ContactCard = ({ item }) => {
    return (
        <div className='contact-card'>
            <div className='contact-top'>
                <img src={item.avatar} alt='' className='contact-avatar' />
                <div className='contact-info'>
                    <lable className='contact-title'>{item.name}</lable>
                    <label className='contact-subtittle'>{item.type}</label>


                </div>
            </div>
            <div className='contact-icons'>
                <div className='contact-icon'>
                    <i class='fi fi-rr-microphone'></i>
                </div>
                <div className='contact-icon'>
                    <i class='fi fi-rr-play-alt'></i>
                </div>
                <div className='contact-icon'>
                    <i class='fi fi-rr-menu-dots'></i>

                </div>

            </div>
        </div>
    )
}

export default ContactCard