import React from 'react'
import ReactDOM from 'react-dom'
import './Portals.css'

function Portals() {
    return ReactDOM.createPortal(
        <div className='Portals'>
            <h1>Demonstration of Portals</h1>
        </div>
    , document.getElementById('portal-root'))
}

export default Portals







































/*
function Portals() {
    return ReactDOM.createPortal(
        <div className='Portals'>
            <h1>Demonstration of Portals</h1>
        </div>
    , document.getElementById('portal-root'))
}
*/