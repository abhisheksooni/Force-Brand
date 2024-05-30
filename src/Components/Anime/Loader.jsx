import './Loader.css';
import React from 'react'
function Loader() {
    return (

        <div className="loader h-[80vh] flex justify-center items-center">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

    )
}

export default Loader