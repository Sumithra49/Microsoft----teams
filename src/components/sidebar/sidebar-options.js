import React from 'react';
import './sidebar-options.css';

const SidebarOptions = ({option,isActive}) => {
    const classList=isActive?'sidebar-option active':"sidebar-option";
  return (
    <div className={classList}>
        <div className='sidebar-icon'>{option.icon}</div>
        {option.name && <lable className='sidebar-label'>{option.name}</lable>}
    </div>
  )
}

export default SidebarOptions;