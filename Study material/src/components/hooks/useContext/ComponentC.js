import React from 'react'
import { UserContext, ChannelContext } from './ComponentA'


// This component is using traditional React context
function ComponentC() {
    return (
        <>
            <h1>Component C - Third level component - Traditional way</h1>
            <UserContext.Consumer>
                {
                    (user) => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    (channel) => {
                                        return (
                                            <p> Values fetched from parent component using <b><u>React context</u></b> are : {user}-{channel}</p>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default ComponentC
