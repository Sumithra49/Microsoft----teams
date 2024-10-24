import React from 'react';
import './index.css';


const Header = () => {
  return (
    <div className='header'>
        <div className='header-menu'>
      <i class="fi fi-br-layout-fluid"></i>
        </div>
        <div className='header-leftFold'>
<label className='header-name'> Microsoft Teams</label>
        </div>
        <div className='header-rightFold'>
<div className='header-search'>
<i class="fi fi-rr-search"></i>
<input placeholder='Search'/>
</div>
<div className='header-profile'>
    <div className='header-options'>
    <i class="fi fi-rr-menu-dots"></i>
    </div>


<img className='header-avatar' src="https://cdn-icons-png.flaticon.com/128/236/236832.png"/>
</div>
        </div>
    </div>
  )
}

export default Header;