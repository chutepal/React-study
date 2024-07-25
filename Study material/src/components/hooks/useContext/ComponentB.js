import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { ChannelContext, UserContext } from './ComponentA';

// This component is using useContext
function ComponentB() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext)
    return (
        <>
            <div>
                <h1>Component B - Second level component - Simpler way</h1>
                <p>Values fetched from parent component using <b><u>useContext</u></b> are : {user}-{channel}</p>
            </div>
            <ComponentC />
        </>
    )
}

export default ComponentB
