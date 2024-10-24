import React from 'react';
import './sidebar.css'
import { SidebarBottom, SidebarData, SidebarMore } from '../../data/sidebar';
import SidebarOptions from './sidebar-options';

const Sidebar = () => {
    const topOptions=SidebarData;
    const more=SidebarMore;
    const bottomOptions=SidebarBottom;
  return (
    <div className='sidebar'>
    <div className='sidebar-top'> 
        <div>
            {topOptions.map((option)=>{
                return(
                   <SidebarOptions option={option} isActive={option.name==='Calls'?true:false}/>
                )
            })}
        </div>
        <div>
           <SidebarOptions option={more}/>
            </div>
    </div>
  
    <div className='sidebar-bottom'>
        {SidebarBottom.map((option)=>{
            return (
              <SidebarOptions option={option}/>
            )
        })}
    </div>
    </div>
  )
}

export default Sidebar