import 'bootstrap-icons/font/bootstrap-icons.css';

import {useState} from "react";

export default function SidebarItem({item}) {

    const [open, setOpen] = useState(false)

    if(item.children) {
        return (
            <div className={open ? "sidebar-item open " : "sidebar-item "}>
                <div className='sidebar-title' onClick={() => setOpen(!open)}>
                <span className='text-light'>
                    {item.icon && <i className={item.icon}> </i> }
                    {item.title}</span>
                    <i className='bi-chevron-down toggle-btn text-light' > </i>
                </div>
                <div className='sidebar-content'>
                    {item.children.map((child, index) => <SidebarItem key={index} item={child}/> )}
                </div>
            </div>

        )
    }
    else {
        return (

            <a href={item.path || "#"} className='sidebar-item plain text-light'>
                   {item.icon && <i className={item.icon}> </i> }
                     {item.title}
            </a>

        )
    }
}