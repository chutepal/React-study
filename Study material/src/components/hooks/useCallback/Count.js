import React from 'react'

function Count({texty, value}) {
    console.log('count component rendered')
    return (
        <div>
        {texty} - {value}
        </div>
    )
}

export default React.memo(Count)
