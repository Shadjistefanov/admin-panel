import React from 'react';


let DateTime =()=> {
    let showDate = new Date();
    let month = showDate.getMonth() + 1
    let displayTodayDate = showDate.getDate() + '.' + month + '.' + showDate.getFullYear();

    return(
        <div className='data-time'>
            <input className='text-light' type="text" value={displayTodayDate} readOnly={true}/>

        </div>
    )
}

export default DateTime();