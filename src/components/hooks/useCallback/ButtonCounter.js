import React from 'react'

function ButtonCounter({ handleClick, children }) {
    console.log(`${children} Button component rendered`)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(ButtonCounter)
