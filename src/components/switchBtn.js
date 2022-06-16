import React from 'react';


export default function BtnToggle() {
    const handleClick = event => {
        // toggle class on click
        event.currentTarget.classList.toggle('active');
    };

    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-lg btn-toggle"  id='btnToggle' data-toggle="button" aria-pressed="false">
                <div className="handle"> </div>
            </button>
        </div>
    );
}