import SidebarItem from './SidebarItem'
import items from "../data/sidebar.json"
import {Collapse} from "react-bootstrap";
import React, {useState} from "react";


export default function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
      <>
          <div className="nav-btn" onClick={() => setOpen(!open)}
               aria-controls="example-collapse-text"
               aria-expanded={open}>
              <span> </span>
              <span> </span>
              <span> </span>
          </div>
                 <Collapse in={open} >
                     <div className='sidebar  bg-blue' id='sidebar'>
                         {items.map((item, index) => <SidebarItem key={index} item={item}/>)}
                     </div>
                 </Collapse>
      </>
    )
}