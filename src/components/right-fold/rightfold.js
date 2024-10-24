import React from 'react';
import './rightFold.css';
import { CallsContact } from '../../data/calls';
import ContactCard from './contact-card';

const RightFold = () => {
    const contacts=CallsContact;
  return (
    <div className='rightFold'>
    <div className='rightFold-heading'>
        <label className='heading'>Contacts</label>

    </div>
    <div className='rightFold-options'>
<div className='contact-search'>
    <input placeholder='Find a contact'/>
    <div className='contact-search-icon'>
        <i class='fi fi-rr-search'></i>

    </div>
</div>
<div className='add-button'>
    <div className='add-icon'>
        <i class='fi fi-rr-user-add'></i>
    </div>
    <label className='add-label'> Add Contact</label>
</div>
<div className='contact-list'></div>

    </div>
    <div className='contact-list'>
        {contacts.map((item)=>{
            return <ContactCard item={item}/>
        })}
    </div>

    </div>
  )
}

export default RightFold;