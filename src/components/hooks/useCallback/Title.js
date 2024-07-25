import React from 'react'

function Title({text}) {
    console.log('Title component rendered')
    return (
        <h2>{text}</h2>
    )
}

export default React.memo(Title)
